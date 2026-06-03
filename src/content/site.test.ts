import { existsSync } from 'node:fs'
import { describe, expect, test } from 'vitest'
import { appRoutes } from '#/config/routes'
import { benefits } from './careers'
import { contact } from './contact'
import { navItems } from './navigation'
import { faqs } from './faq'
import { compensationFormula, features, stats, welcomeVideo } from './home'
import { industryVideo } from './industry'
import { licenseSteps } from './licensing'
import { portalTabs } from './portal'
import { teamProfiles } from './team'
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

  test('keeps team roles and Julian highlights explicit', () => {
    expect(teamProfiles.map((profile) => profile.name)).toEqual([
      contact.owner,
      'Zaccari Antonucci',
      'Keenan Lawrence',
      'Alejandro Maya',
      'Amir Gibson',
    ])
    expect(teamProfiles[0]).toMatchObject({
      name: contact.owner,
      title: contact.ownerTitle,
      highlights: [
        'Born and raised in Miami, Florida',
        'Attended University of Florida',
        '2+ years of sales and training experience',
        '700K+ personal IP',
        '10M+ agency IP',
      ],
    })
    expect(teamProfiles[1]).toMatchObject({
      name: 'Zaccari Antonucci',
      title: 'Partner',
      highlights: [
        '2+ years of insurance sales and leadership experience',
        '$50K+ monthly producer',
        'Currently leading a 7-figure insurance agency',
        'Trained and mentored agents across the country',
        'Passionate about faith, family, and helping others win',
      ],
    })
    expect(teamProfiles[2]).toMatchObject({
      name: 'Keenan Lawrence',
      title: 'Partner',
      highlights: [
        '2+ years in the insurance industry',
        '500K+ yearly personal IP',
        'Leading 400K+/month agency',
        'Advanced markets professional',
        'Owns office in Boca Raton, Florida',
      ],
    })
    expect(
      teamProfiles.slice(1).every((profile) => profile.title === 'Partner'),
    ).toBe(true)
    expect(
      teamProfiles.every((profile) =>
        existsSync(
          new URL(`../../public${profile.photo.src}`, import.meta.url),
        ),
      ),
    ).toBe(true)
  })

  test('keeps video content source-driven', () => {
    expect(welcomeVideo).toMatchObject({
      kind: 'video',
      posterUrl: '/assets/videos/welcome-vsl-poster.jpg',
      src: '/assets/videos/welcome-vsl.mp4',
      type: 'video/mp4',
    })
    expect(
      existsSync(
        new URL('../../public/assets/videos/welcome-vsl.mp4', import.meta.url),
      ),
    ).toBe(true)
    expect(
      existsSync(
        new URL(
          '../../public/assets/videos/welcome-vsl-poster.jpg',
          import.meta.url,
        ),
      ),
    ).toBe(true)
    expect(industryVideo.kind).toBe('placeholder')
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

  test('keeps retired survey 3.0 resource out of the portal', () => {
    const actionLabels = portalTabs.flatMap((tab) =>
      tab.sections.flatMap(
        (section) => section.actions?.map((action) => action.label) ?? [],
      ),
    )

    expect(actionLabels).not.toContain('Survey 3.0 Script')
  })

  test('keeps contracting and dialer portal steps in the right tabs', () => {
    const contracting = portalTabs.find((tab) => tab.id === 'contracting')
    const dialer = portalTabs.find((tab) => tab.id === 'dialer')
    const directUplineStep: PortalSection | undefined =
      contracting?.sections.find(
        (section) => section.title === 'Send Agent Details',
      )
    const contractingResources: PortalSection | undefined =
      contracting?.sections.find(
        (section) => section.title === 'Contracting Resources',
      )
    const supremeCarriers: PortalSection | undefined =
      contracting?.sections.find(
        (section) => section.title === 'JG Financial Carriers - Supreme',
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
    expect(contractingResources?.actions).toEqual([
      {
        label: 'Open State Guide',
        href: contact.stateGuide,
      },
    ])
    expect(supremeCarriers?.actions).toEqual([
      {
        label: 'Contract via SuranceBay',
        href: 'https://surelc.surancebay.com/producer/?gaId=1279&branch=JG%20Financial&branchVisible=true&branchEditable=false&branchRequired=true&autoAdd=false&requestMethod=GET',
      },
    ])
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
    expect(dialerBuyingOption?.actions).toEqual([
      {
        label: 'Buy States on NIPR',
        href: 'https://nipr.com/licensing-center',
      },
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
