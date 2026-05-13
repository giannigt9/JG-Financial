import { describe, expect, test } from 'vitest'
import { faqs, licenseSteps, navItems, stats } from './site'

describe('site content contracts', () => {
  test('keeps primary routes in the navigation', () => {
    expect(navItems.map((item) => item.to)).toEqual([
      '/',
      '/get-licensed',
      '/industry',
      '/team',
      '/faq',
      '/careers',
      '/portal',
    ])
  })

  test('keeps conversion-critical content populated', () => {
    expect(stats).toHaveLength(5)
    expect(licenseSteps).toHaveLength(6)
    expect(faqs.length).toBeGreaterThanOrEqual(8)
  })
})
