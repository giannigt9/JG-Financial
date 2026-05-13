import type { BenefitItem } from './types'

export const benefits = [
  {
    title: 'Agency',
    detail:
      'Build your brand and your business. Lead a team and earn override commissions.',
    icon: 'agency',
  },
  {
    title: 'Work Anywhere',
    detail: 'Remote signature process and national virtual operations.',
    icon: 'remote',
  },
  {
    title: 'Residuals',
    detail: 'Day-one vested residual income on every policy you write.',
    icon: 'residuals',
  },
  {
    title: 'Product Lineup',
    detail:
      'Consultation products that help more clients find the right policy.',
    icon: 'products',
  },
  {
    title: 'Maxed Payouts',
    detail: 'Competitive commission levels built for producers.',
    icon: 'payouts',
  },
  {
    title: 'Conventions',
    detail: 'Exclusive company trips and production incentives.',
    icon: 'conventions',
  },
  {
    title: 'Coaching',
    detail: 'Direct mentorship from agents producing at high levels.',
    icon: 'coaching',
  },
  {
    title: 'Lead Flow',
    detail: 'Pre-qualified lead sources delivered through the agency system.',
    icon: 'leads',
  },
] satisfies Array<BenefitItem>
