import { describe, expect, test } from 'vitest'
import { appRoutes } from '#/config/routes'
import { benefits } from './careers'
import { navItems } from './navigation'
import { faqs } from './faq'
import { compensationFormula, features, stats } from './home'
import { licenseSteps } from './licensing'
import { portalTabs } from './portal'

describe('site content contracts', () => {
  test('keeps primary routes in the navigation', () => {
    expect(navItems.map((item) => item.to)).toEqual([
      '/',
      '/get-licensed',
      '/industry',
      '/team',
      '/faq',
      '/careers',
      '/live-leaderboard',
      '/portal',
    ])
  })

  test('keeps conversion-critical content populated', () => {
    expect(stats).toHaveLength(5)
    expect(licenseSteps).toHaveLength(6)
    expect(faqs.length).toBeGreaterThanOrEqual(8)
  })

  test('keeps internal CTAs on known app routes', () => {
    const routes = new Set(Object.values(appRoutes))
    const ctas = [
      ...features.map((feature) => feature.cta),
      ...licenseSteps.map((step) => step.link),
    ]

    for (const cta of ctas) {
      if (cta.to !== undefined) {
        expect(routes.has(cta.to)).toBe(true)
      }
    }
  })

  test('uses explicit icon contracts instead of positional icon mapping', () => {
    expect(features.map((feature) => feature.icon)).toEqual([
      'dialer',
      'analytics',
      'products',
      'mentorship',
    ])
    expect(new Set(benefits.map((benefit) => benefit.icon)).size).toBe(
      benefits.length,
    )
  })

  test('keeps compensation formula structured', () => {
    expect(compensationFormula.factors).toHaveLength(4)
    expect(compensationFormula.result).toBe('$422 per sale')
  })

  test('keeps restricted portal content behind structured tabs', () => {
    expect(portalTabs.length).toBeGreaterThan(0)
    expect(portalTabs.every((tab) => tab.sections.length > 0)).toBe(true)
    expect(
      portalTabs.every((tab) =>
        tab.sections.every(
          (section) =>
            section.actions?.every((action) =>
              action.href.startsWith('https://'),
            ) ?? true,
        ),
      ),
    ).toBe(true)
  })
})
