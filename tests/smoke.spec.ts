import { expect, test } from '@playwright/test'

test('primary routes render and navigate', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: /Create The Lifestyle/i })).toBeVisible()

  await page.getByRole('link', { name: 'Get Licensed', exact: true }).first().click()
  await expect(page).toHaveURL(/\/get-licensed$/)
  await expect(page.getByText('Licensing Guide')).toBeVisible()

  await page.getByRole('link', { name: 'FAQ', exact: true }).first().click()
  await expect(page).toHaveURL(/\/faq$/)
  await page.getByText('What is JG Financial?').click()
  await expect(page.getByText('JG Financial is a national life insurance agency.')).toBeVisible()
})

test('agent portal gates restricted data server-side', async ({ page }) => {
  await page.goto('/portal')

  await expect(page.getByText('Enter Agent Password')).toBeVisible()
  await expect(page.getByText('Contract via SuranceBay')).toHaveCount(0)

  await page.getByPlaceholder('Enter password').fill('wrong-password')
  await page.getByRole('button', { name: 'Unlock' }).click()
  await expect(page.getByText('Incorrect password')).toBeVisible()

  await page.getByPlaceholder('Enter password').fill('JGAgent2026')
  await page.getByRole('button', { name: 'Unlock' }).click()
  await expect(page.getByText('Portal Unlocked')).toBeVisible()
  await expect(page.getByText('Contract via SuranceBay').first()).toBeVisible()
})

test('mobile menu exposes route navigation without horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await page.getByRole('button', { name: 'Toggle menu' }).click()
  await page.locator('header').getByRole('link', { name: 'Careers', exact: true }).click()
  await expect(page).toHaveURL(/\/careers$/)

  const hasOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  )
  expect(hasOverflow).toBe(false)
})
