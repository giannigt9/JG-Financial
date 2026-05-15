import { existsSync } from 'node:fs'
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
              action.download
                ? action.href.startsWith('/')
                : action.href.startsWith('https://'),
            ) ?? true,
        ),
      ),
    ).toBe(true)
  })

  test('keeps promotional guidelines as a local PDF download', () => {
    const promo = portalTabs.find((tab) => tab.id === 'promo')
    const guidelines = promo?.sections.find(
      (section) => section.title === 'Promotional Guidelines',
    )
    const action = guidelines?.actions?.[0]

    expect(action).toEqual({
      label: 'Download Guidelines',
      href: '/assets/jg_financial_promo_guidelines.pdf',
      download: 'jg_financial_promo_guidelines.pdf',
    })
    expect(
      existsSync(
        new URL(
          '../../public/assets/jg_financial_promo_guidelines.pdf',
          import.meta.url,
        ),
      ),
    ).toBe(true)
  })

  test('keeps contracting and dialer portal steps in the right tabs', () => {
    const contracting = portalTabs.find((tab) => tab.id === 'contracting')
    const dialer = portalTabs.find((tab) => tab.id === 'dialer')
    const directUplineStep: PortalSection | undefined =
      contracting?.sections.find(
        (section) => section.title === 'Send Agent Details',
      )
    const leadStructure: PortalSection | undefined = dialer?.sections.find(
      (section) => section.title === 'New Agent Lead Structure',
    )
    const dialerBuyingOption: PortalSection | undefined = dialer?.sections.find(
      (section) => section.title === 'Dialer Buying Option',
    )

    expect(
      contracting?.sections.some(
        (section) => section.title === 'Dialer Buying Option',
      ),
    ).toBe(false)
    expect(directUplineStep?.body).toBe(
      'Send your name, NPN, phone number, and email to your direct upline after completing your contracting steps.',
    )
    expect(dialer?.sections.map((section) => section.title)).toEqual([
      'Unlimited Missed Inbound FEX Dialer',
      'Unlimited Survey + FEX Dialer',
      'New Agent Lead Structure',
      'Dialer Buying Option',
    ])
    expect(leadStructure?.badge).toBe('Up to 1 Month Free')
    expect(leadStructure?.milestones).toEqual([
      {
        label: '7-Day Trial',
        detail: 'Start with 7 days of free unlimited leads.',
      },
      {
        label: 'Week 1',
        detail: 'Close 1 deal to unlock 7 additional free days.',
      },
      {
        label: 'Week 2',
        detail: 'Close 2 deals to unlock 7 additional free days.',
      },
      {
        label: 'Week 3',
        detail: 'Close 3 deals to unlock the final 7 free days.',
      },
    ])
    expect(dialerBuyingOption?.stateCodes).toEqual([
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
    expect(dialerBuyingOption?.licenseCosts).toEqual([
      { state: 'Michigan', cost: '$10' },
      { state: 'Kansas', cost: '$40' },
      { state: 'Indiana', cost: '$80' },
      { state: 'Louisiana', cost: '$75' },
      { state: 'Idaho', cost: '$80' },
      { state: 'Utah', cost: '$80' },
    ])
  })
})
