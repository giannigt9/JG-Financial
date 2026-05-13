import { appRoutes } from '#/config/routes'
import { contact } from './contact'
import type { CostRow, ProcessStep } from './types'

export const licenseSteps = [
  {
    title: 'Reach Out to Upline',
    description:
      'Contact your upline and join the JG Financial Discord for community, training, and support.',
    badge: 'Step Zero',
    link: { label: 'Join the Discord', href: contact.licenseDiscord },
  },
  {
    title: 'Pre-Licensing',
    description:
      'Complete your Life pre-licensing course online via Xcel Solutions. Use code 2020 at checkout.',
    badge: '$30 with code 2020',
    link: { label: 'Xcel Solutions', href: contact.xcel },
  },
  {
    title: 'State Exam & Fingerprints',
    description:
      'Schedule your proctored state exam and complete fingerprint requirements. Requirements vary by state.',
    badge: '$40-$100 per attempt',
    link: { label: 'State Guide', href: contact.stateGuide },
  },
  {
    title: 'License Application',
    description:
      'After passing the state exam, apply through your state Department of Insurance. Approval typically takes 5-10 business days.',
    badge: 'State fee + $5.60',
    link: { label: 'State Guide', href: contact.stateGuide },
  },
  {
    title: 'Carrier Contracting + E&O',
    description:
      'Apply for carrier appointments through SuranceBay. E&O Insurance is obtained during contracting.',
    badge: 'Contracting free',
    link: { label: 'Agent Portal', to: appRoutes.portal },
  },
  {
    title: 'Start Selling',
    description:
      'Plug into training, pull leads, run first appointments, and start protecting families.',
    badge: 'You are in business',
    link: { label: 'Agent Portal', to: appRoutes.portal },
  },
] satisfies Array<ProcessStep>

export const onboardingCosts = [
  { label: 'Pre-Licensing - Xcel Solutions', value: '$30 with code 2020' },
  { label: 'State Licensing Exam', value: '$40-$100 / attempt' },
  { label: 'Resident License Fee', value: 'Varies by state' },
  { label: 'Carrier Contracting', value: 'Free' },
  { label: 'E&O Insurance', value: '$127 down + $27/mo' },
  { label: 'Estimated Out-of-Pocket Total', value: '~$230-$330' },
] satisfies Array<CostRow>
