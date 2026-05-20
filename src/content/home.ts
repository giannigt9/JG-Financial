import { appRoutes } from '#/config/routes'
import type {
  CompensationFormula,
  FeatureItem,
  MathRow,
  PillarItem,
  ScheduleDay,
  StatItem,
  VideoFeatureContent,
} from './types'

export const welcomeVideo = {
  eyebrow: 'Welcome Video',
  kind: 'embed',
  title: 'Welcome to JG Financial',
  description:
    'A welcome message from Julian introducing JG Financial and the opportunity for new agents.',
  embedUrl:
    'https://drive.google.com/file/d/11rBXDgWFs9McHMSKc7VHl9-uFSkw9iry/preview',
  thumbnailUrl:
    'https://drive.google.com/thumbnail?id=11rBXDgWFs9McHMSKc7VHl9-uFSkw9iry&sz=w1600',
} satisfies VideoFeatureContent

export const stats = [
  { value: '45%', label: 'of Americans have no life insurance at all' },
  {
    value: '70%',
    label: 'of households would struggle if the primary wage earner passed',
  },
  {
    value: '75%',
    label: 'of Americans do not have a Medicare supplement plan',
  },
  { value: '$10K', label: 'is the cost of an average funeral today' },
  {
    value: '60%+',
    label: 'will outlive retirement and be unable to work',
  },
] satisfies Array<StatItem>

export const features = [
  {
    title: 'JG Dials: Triple Your Speed, Triple Your Success',
    description:
      'Stop wasting time dialing manually. Our mandatory dial hours help agents connect with more prospects faster. More dials, more leads, more sales.',
    cta: { label: 'Explore Careers', to: appRoutes.careers },
    icon: 'dialer',
  },
  {
    title: 'CRM Access: Smarter Tools, Better Results',
    description:
      'Advanced backend analytics and quoting software help agents find policy options quickly, close deals faster, and stay ahead of the competition.',
    cta: { label: 'Explore Careers', to: appRoutes.careers },
    icon: 'analytics',
  },
  {
    title: 'Top Products & High Commissions',
    description:
      'Partnered with top insurance carriers, JG Financial gives agents strong product access, competitive rates, and commissions that reward the work.',
    cta: { label: 'View Portal', to: appRoutes.portal },
    icon: 'products',
  },
  {
    title: 'Mentorship That Wins',
    description:
      'A dedicated live agent works with you in your local area, providing personalized support tailored to your goals and activity level.',
    cta: { label: 'Meet the Team', to: appRoutes.team },
    icon: 'mentorship',
  },
] satisfies Array<FeatureItem>

export const whyPillars = [
  { name: 'Systems', detail: 'Production frameworks that scale' },
  { name: 'Mentorship', detail: 'Real producers, real coaching' },
  { name: 'Culture', detail: 'Win-driven and results-obsessed' },
  { name: 'Community', detail: 'Built by agents, for agents' },
  { name: 'Compensation', detail: 'Industry-leading payouts' },
  { name: 'Partnerships', detail: 'Top-rated carrier access' },
] satisfies Array<PillarItem>

export const mathRows = [
  { value: '$422', label: 'earned per sale' },
  { value: '24 deals/month', label: '= $10,000' },
  { value: '1% close rate', label: 'on conversations' },
  { value: '1 sale', label: 'per 100 conversations' },
  { value: '2,400 conversations', label: 'per month' },
  { value: '25 pickups', label: 'per hour dialing' },
  { value: '96 hours', label: 'per month dialing' },
  { value: '~5 hours/day', label: '= $10K/month' },
] satisfies Array<MathRow>

export const compensationFormula = {
  factors: ['$1,000 avg AP', '75% Comp', '75% Advance', '75% Persistency'],
  result: '$422 per sale',
} satisfies CompensationFormula

export const schedule = [
  {
    day: 'Monday',
    blocks: [
      {
        time: '9:00 - 9:30 AM',
        activity: 'Carrier Relations',
        note: 'Contact carriers, resolve pending issues, escalate urgent cases.',
      },
      {
        time: '9:30 - 10:00 AM',
        activity: 'Agency Call',
        note: 'Production updates, live training, strategy coaching.',
      },
      {
        time: '11:00 AM - 3:00 PM',
        activity: 'Phones / Sits',
        note: 'Work leads, set appointments, close deals.',
      },
      {
        time: '4:00 - 9:00 PM',
        activity: 'Phones / Sits',
        note: 'Evening push with higher contact rates.',
      },
    ],
  },
  {
    day: 'Tuesday',
    blocks: [
      {
        time: '9:00 AM',
        activity: 'Morning Grind',
        note: 'Start dialing early and build momentum.',
      },
      {
        time: '2:00 - 7:00 PM',
        activity: 'Phones / Sits',
        note: 'Afternoon and evening sessions.',
      },
      {
        time: '7:00 PM',
        activity: 'Gym / Training',
        note: 'Physical health equals mental edge.',
      },
    ],
  },
  {
    day: 'Wednesday',
    blocks: [
      {
        time: '9:00 AM',
        activity: 'Morning Grind',
        note: 'Midweek momentum. Dial with energy.',
      },
      {
        time: '2:00 - 7:00 PM',
        activity: 'Phones / Sits',
        note: 'Stack appointments and protect the pipeline.',
      },
      {
        time: 'Pipeline Review',
        activity: 'Pipeline Review',
        note: 'Review pending apps and outstanding quotes.',
      },
    ],
  },
  {
    day: 'Thursday',
    blocks: [
      {
        time: '9:30 - 10:00 AM',
        activity: 'Agency Workshop',
        note: 'Production updates, live training, strategy.',
      },
      {
        time: '10:30 AM - 3:00 PM',
        activity: 'Phones / Sits',
        note: 'Set weekend appointments and stay aggressive.',
      },
      {
        time: 'Case Follow-Up',
        activity: 'Case Follow-Up',
        note: 'Check apps, underwriting status, and documents.',
      },
    ],
  },
  {
    day: 'Friday',
    blocks: [
      {
        time: '9:00 AM',
        activity: 'Week Review',
        note: 'Close pending cases and clear your desk.',
      },
      {
        time: '11:00 AM - 3:00 PM',
        activity: 'Phones / Sits',
        note: 'Book weekend and Monday appointments.',
      },
      {
        time: 'Weekly Numbers',
        activity: 'KPI Review',
        note: 'Track dials, sits, apps, and closes.',
      },
    ],
  },
  {
    day: 'Saturday',
    blocks: [
      {
        time: '9:00 AM',
        activity: 'Review & Prep',
        note: 'Review weekly numbers and goals.',
      },
      {
        time: '11:00 AM - 3:00 PM',
        activity: 'Phones / Sits',
        note: 'Saturdays bring strong pickup rates.',
      },
      {
        time: '5:00 - 9:00 PM',
        activity: 'Phones / Sits',
        note: 'Evening dials while people are home.',
      },
    ],
  },
  {
    day: 'Sunday',
    blocks: [
      {
        time: '9:00 AM',
        activity: 'Plan & Visualize',
        note: 'Map out the week and review pipeline.',
      },
      {
        time: 'Rest',
        activity: 'Rest & Recharge',
        note: 'Protect your energy for the week.',
      },
      {
        time: 'Evening',
        activity: 'Sunday Overtime',
        note: 'Optional pre-set appointments.',
      },
    ],
  },
] satisfies Array<ScheduleDay>
