import { expect, test } from '@playwright/test'
import type { Page } from '@playwright/test'

const agentPortalPassword = process.env.AGENT_PORTAL_PASSWORD
const welcomeVideoSource = '/assets/videos/welcome-vsl.mp4'
const welcomeVideoViewports = [
  { height: 568, width: 320 },
  { height: 844, width: 390 },
  { height: 320, width: 568 },
  { height: 1024, width: 768 },
  { height: 768, width: 1024 },
  { height: 900, width: 1440 },
  { height: 1080, width: 1920 },
]

if (!agentPortalPassword) {
  throw new Error('AGENT_PORTAL_PASSWORD is required')
}

async function clickHeaderLink(page: Page, name: string) {
  const menuButton = page.getByRole('button', { name: 'Toggle menu' })

  if (await menuButton.isVisible()) {
    await menuButton.click()
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    await page
      .locator('header')
      .getByRole('link', { name, exact: true })
      .click()
    return
  }

  await page.locator('header').getByRole('link', { name, exact: true }).click()
}

test('primary routes render and navigate', async ({ page }) => {
  await page.goto('/')
  await page.waitForLoadState('networkidle')
  await expect(
    page.getByRole('heading', { name: /Create The Lifestyle/i }),
  ).toBeVisible()

  await clickHeaderLink(page, 'Get Licensed')
  await expect(page).toHaveURL(/\/get-licensed$/)
  await expect(page.getByText('Licensing Guide')).toBeVisible()

  await clickHeaderLink(page, 'FAQ')
  await expect(page).toHaveURL(/\/faq$/)
  await page.getByText('What is JG Financial?').click()
  await expect(
    page.getByText('JG Financial is a national life insurance agency.'),
  ).toBeVisible()

  await clickHeaderLink(page, 'Live Leaderboard')
  await expect(page).toHaveURL(/\/live-leaderboard$/)
  await expect(
    page.getByRole('heading', { exact: true, name: 'Leaderboard' }),
  ).toBeVisible()
  await expect(page.getByRole('button', { name: 'Apply Filter' })).toHaveCount(
    0,
  )
})

test('agent portal gates restricted data server-side', async ({ page }) => {
  await page.goto('/portal')
  await page.waitForLoadState('networkidle')

  await expect(page.getByText('Enter Agent Password')).toBeVisible()
  await expect(page.getByText('Contract via SuranceBay')).toHaveCount(0)

  await page.getByLabel('Agent portal password').fill('wrong-password')
  await page.getByRole('button', { name: 'Unlock' }).click()
  await expect(page.getByText('Incorrect password')).toBeVisible()

  await page.getByLabel('Agent portal password').fill(agentPortalPassword)
  await page.getByRole('button', { name: 'Unlock' }).click()
  await expect(page.getByText('Portal Unlocked')).toBeVisible()
  await expect(page.getByText('Contract via SuranceBay').first()).toBeVisible()
  const buyStatesLink = page.getByRole('link', { name: 'Buy States on NIPR' })
  await expect(buyStatesLink).toBeVisible()
  await expect(buyStatesLink).toHaveAttribute(
    'href',
    'https://nipr.com/licensing-center',
  )

  const session = (await page.context().cookies()).find(
    (cookie) => cookie.name === '__Host-jg_portal',
  )
  expect(session?.httpOnly).toBe(true)
  expect(session?.sameSite).toBe('Lax')
})

test('mobile menu exposes route navigation without horizontal overflow', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await page.waitForLoadState('networkidle')
  await clickHeaderLink(page, 'Careers')
  await expect(page).toHaveURL(/\/careers$/)

  const hasOverflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth,
  )
  expect(hasOverflow).toBe(false)
})

test('welcome video controls stay responsive across viewport sizes', async ({
  page,
}) => {
  await page.route(`**${welcomeVideoSource}`, (route) =>
    route.fulfill({
      body: '',
      contentType: 'video/mp4',
      status: 200,
    }),
  )

  for (const viewport of welcomeVideoViewports) {
    await page.setViewportSize(viewport)
    await page.goto('/', { waitUntil: 'domcontentloaded' })

    const video = page.locator('video[aria-label="Welcome to JG Financial"]')
    await expect(video).toBeVisible()
    await expect(video.locator('source')).toHaveAttribute(
      'src',
      welcomeVideoSource,
    )
    await expect(video.locator('source')).toHaveAttribute('type', 'video/mp4')

    const metrics = await video.evaluate((node: HTMLVideoElement) => {
      const frame = node.closest('[data-vsl-frame]')
      const card = node.closest('[data-vsl-card]')

      if (!frame || !card) {
        throw new Error('Expected video feature frame and card wrappers.')
      }

      const serializeRect = (element: Element) => {
        const rect = element.getBoundingClientRect()

        return {
          bottom: rect.bottom,
          height: rect.height,
          left: rect.left,
          right: rect.right,
          top: rect.top,
          width: rect.width,
        }
      }

      const frameRect = serializeRect(frame)
      const videoRect = serializeRect(node)

      return {
        frame: frameRect,
        hasControls: node.controls,
        hasOverflow:
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth,
        video: videoRect,
        videoInsideFrame:
          videoRect.left >= frameRect.left - 1 &&
          videoRect.right <= frameRect.right + 1 &&
          videoRect.top >= frameRect.top - 1 &&
          videoRect.bottom <= frameRect.bottom + 1,
      }
    })

    expect(metrics.hasControls).toBe(true)
    expect(metrics.hasOverflow).toBe(false)
    expect(metrics.video.width).toBeGreaterThan(0)
    expect(metrics.video.height).toBeGreaterThan(0)
    expect(metrics.videoInsideFrame).toBe(true)
    expect(metrics.frame.width / metrics.frame.height).toBeCloseTo(16 / 9, 1)
  }
})
