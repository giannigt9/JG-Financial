import { describe, expect, test } from 'vitest'
import { appRoutes } from '#/config/routes'
import { benefits } from './careers'
import { navItems } from './navigation'
import { faqs } from './faq'
import { compensationFormula, features, stats, welcomeVideo } from './home'
import { industryVideo } from './industry'
import { licenseSteps } from './licensing'
import { portalTabs } from './portal'
import type { PortalSection } from './portal'

describe('site content contracts', () => {
  test('keeps primary routes in the navigation', () => {
    expect(navItems.map((item) => item.to)).toEqual([
      '/',
      '/live-leaderboard',
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

  test('keeps video placeholders content-driven', () => {
    expect(welcomeVideo.status).toBe('Editing in progress')
    expect(industryVideo.status).toBe('Loom embed ready')
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

  test('keeps state buying options under contracting and dialer', () => {
    const contracting = portalTabs.find((tab) => tab.id === 'contracting')
    const dialer = portalTabs.find((tab) => tab.id === 'dialer')
    const contractingBuyingOption: PortalSection | undefined =
      contracting?.sections.find(
        (section) => section.title === 'Dialer Buying Option',
      )
    const dialerBuyingOption: PortalSection | undefined = dialer?.sections.find(
      (section) => section.title === 'Dialer Buying Option',
    )

    expect(contractingBuyingOption).toEqual(dialerBuyingOption)
    expect(contractingBuyingOption?.stateCodes).toEqual([
      'NV',
      'UT',
      'ID',
      'NE',
      'LA',
      'OK',
      'IN',
      'FL',
      'TX',
      'KY',
      'MI',
      'MO',
      'KS',
      'AZ',
      'MD',
      'SC',
    ])
    expect(contractingBuyingOption?.licenseCosts).toEqual([
      { state: 'Michigan', cost: '$10' },
      { state: 'Kansas', cost: '$40' },
      { state: 'Indiana', cost: '$80' },
      { state: 'Louisiana', cost: '$75' },
      { state: 'Idaho', cost: '$80' },
      { state: 'Utah', cost: '$80' },
    ])
  })
})
