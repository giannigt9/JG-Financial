import { expect, test } from '@playwright/test'
import type { Page } from '@playwright/test'

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
})

test('agent portal gates restricted data server-side', async ({ page }) => {
  await page.goto('/portal')
  await page.waitForLoadState('networkidle')

  await expect(page.getByText('Enter Agent Password')).toBeVisible()
  await expect(page.getByText('Contract via SuranceBay')).toHaveCount(0)

  await page.getByLabel('Agent portal password').fill('wrong-password')
  await page.getByRole('button', { name: 'Unlock' }).click()
  await expect(page.getByText('Incorrect password')).toBeVisible()

  await page.getByLabel('Agent portal password').fill('JGAgent2026')
  await page.getByRole('button', { name: 'Unlock' }).click()
  await expect(page.getByText('Portal Unlocked')).toBeVisible()
  await expect(page.getByText('Contract via SuranceBay').first()).toBeVisible()

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
