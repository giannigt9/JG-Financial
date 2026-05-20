import type { AppRoute } from '#/config/routes'

export type ExternalCta = {
  href: string
  label: string
  to?: never
}

export type InternalCta = {
  href?: never
  label: string
  to: AppRoute
}

export type LinkCta = ExternalCta | InternalCta

export type StatItem = {
  label: string
  value: string
}

type VideoFeatureBase = {
  description: string
  eyebrow: string
  title: string
}

export type VideoFeatureContent =
  | (VideoFeatureBase & {
      embedUrl: string
      kind: 'embed'
      thumbnailUrl: string
    })
  | (VideoFeatureBase & {
      kind: 'placeholder'
      status: string
    })

export type FeatureIcon =
  | 'dialer'
  | 'analytics'
  | 'products'
  | 'mentorship'
  | 'carrierAccess'
  | 'calendar'
  | 'support'
  | 'growth'

export type FeatureItem = {
  cta: LinkCta
  description: string
  icon: FeatureIcon
  title: string
}

export type PillarItem = {
  detail: string
  name: string
}

export type MathRow = {
  label: string
  value: string
}

export type CompensationFormula = {
  factors: Array<string>
  result: string
}

export type ScheduleBlock = {
  activity: string
  note: string
  time: string
}

export type ScheduleDay = {
  blocks: Array<ScheduleBlock>
  day: string
}

export type ProcessStep = {
  badge: string
  description: string
  link?: LinkCta
  title: string
}

export type CostRow = {
  label: string
  value: string
}

export type BenefitIcon =
  | 'agency'
  | 'remote'
  | 'residuals'
  | 'products'
  | 'payouts'
  | 'conventions'
  | 'coaching'
  | 'leads'

export type BenefitItem = {
  detail: string
  icon: BenefitIcon
  title: string
}

export type ManagerProfile = {
  bio: string
  initials: string
  name: string
  title: string
}

export type FaqItem = {
  answer: string
  question: string
}

export type NavigationItem = {
  label: string
  to: AppRoute
}

export type ContactDetails = {
  agentSpace: string
  discord: string
  email: string
  licenseDiscord: string
  nipr: string
  owner: string
  stateGuide: string
  xcel: string
}
