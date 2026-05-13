import type { LinkProps } from '@tanstack/react-router'

export type InternalHref = LinkProps['to']

export const contact = {
  email: 'julianmginsurance@gmail.com',
  owner: 'Julian Gaviria',
  discord: 'https://discord.gg/7GRXUFA6',
  licenseDiscord: 'https://discord.com/invite/XBWDVnRF',
  stateGuide:
    'https://docs.google.com/spreadsheets/d/1B5IWIe8ONxYilYXYd0tisaRBtiK3QvYDTS6YuwxoKXM/edit?gid=1632858584',
  xcel: 'https://www.xcelsolutions.com',
  nipr: 'https://nipr.com',
  agentSpace: 'https://app.useagentspace.com/login?redirect=%2F',
}

export const navItems: Array<{ label: string; to: InternalHref }> = [
  { label: 'Home', to: '/' },
  { label: 'Get Licensed', to: '/get-licensed' },
  { label: 'Industry', to: '/industry' },
  { label: 'Team', to: '/team' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Careers', to: '/careers' },
  { label: 'Agent Portal', to: '/portal' },
]

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
]

export const features = [
  {
    title: 'JG Dials: Triple Your Speed, Triple Your Success',
    description:
      'Stop wasting time dialing manually. Our mandatory dial hours help agents connect with more prospects faster. More dials, more leads, more sales.',
    cta: 'Explore Careers',
    href: '/careers' as InternalHref,
  },
  {
    title: 'CRM Access: Smarter Tools, Better Results',
    description:
      'Advanced backend analytics and quoting software help agents find policy options quickly, close deals faster, and stay ahead of the competition.',
    cta: 'Explore Careers',
    href: '/careers' as InternalHref,
  },
  {
    title: 'Top Products & High Commissions',
    description:
      'Partnered with top insurance carriers, JG Financial gives agents strong product access, competitive rates, and commissions that reward the work.',
    cta: 'View Portal',
    href: '/portal' as InternalHref,
  },
  {
    title: 'Mentorship That Wins',
    description:
      'A dedicated live agent works with you in your local area, providing personalized support tailored to your goals and activity level.',
    cta: 'Meet the Team',
    href: '/team' as InternalHref,
  },
]

export const whyPillars = [
  { name: 'Systems', detail: 'Production frameworks that scale' },
  { name: 'Mentorship', detail: 'Real producers, real coaching' },
  { name: 'Culture', detail: 'Win-driven and results-obsessed' },
  { name: 'Community', detail: 'Built by agents, for agents' },
  { name: 'Compensation', detail: 'Industry-leading payouts' },
  { name: 'Partnerships', detail: 'Top-rated carrier access' },
]

export const mathRows = [
  { value: '$422', label: 'earned per sale' },
  { value: '24 deals/month', label: '= $10,000' },
  { value: '1% close rate', label: 'on conversations' },
  { value: '1 sale', label: 'per 100 conversations' },
  { value: '2,400 conversations', label: 'per month' },
  { value: '25 pickups', label: 'per hour dialing' },
  { value: '96 hours', label: 'per month dialing' },
  { value: '~5 hours/day', label: '= $10K/month' },
]

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
]

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
    internalLink: { label: 'Agent Portal', to: '/portal' as InternalHref },
  },
  {
    title: 'Start Selling',
    description:
      'Plug into training, pull leads, run first appointments, and start protecting families.',
    badge: 'You are in business',
    internalLink: { label: 'Agent Portal', to: '/portal' as InternalHref },
  },
]

export const benefits = [
  {
    title: 'Agency',
    detail:
      'Build your brand and your business. Lead a team and earn override commissions.',
  },
  {
    title: 'Work Anywhere',
    detail: 'Remote signature process and national virtual operations.',
  },
  {
    title: 'Residuals',
    detail: 'Day-one vested residual income on every policy you write.',
  },
  {
    title: 'Product Lineup',
    detail: 'Consultation products that help more clients find the right policy.',
  },
  {
    title: 'Maxed Payouts',
    detail: 'Competitive commission levels built for producers.',
  },
  {
    title: 'Conventions',
    detail: 'Exclusive company trips and production incentives.',
  },
  {
    title: 'Coaching',
    detail: 'Direct mentorship from agents producing at high levels.',
  },
  {
    title: 'Lead Flow',
    detail: 'Pre-qualified lead sources delivered through the agency system.',
  },
]

export const managers = [
  {
    initials: 'JG',
    name: 'Julian Gaviria',
    title: 'Founder · CEO',
    bio: 'Founded JG Financial to give agents a real shot at this industry through mentorship, contracts, and a culture of genuine impact.',
  },
  {
    initials: 'M2',
    name: 'Manager Name',
    title: 'Senior Manager',
    bio: 'Bio coming soon. This profile is ready for a real manager photo, production story, and coaching specialty.',
  },
  {
    initials: 'M3',
    name: 'Manager Name',
    title: 'Manager',
    bio: 'Bio coming soon. This profile is ready for a real manager photo, production story, and coaching specialty.',
  },
]

export const faqs = [
  {
    question: 'What is JG Financial?',
    answer:
      'JG Financial is a national life insurance agency. We partner with top-rated carriers and provide agents with mentorship, training, contracts, and systems to build a real career.',
  },
  {
    question: 'Do I need experience to join?',
    answer:
      'No. We work with both licensed agents and people who have never sold insurance before.',
  },
  {
    question: 'Do I need a license to apply?',
    answer:
      'No. You can apply before you are licensed. If approved, the team walks you through pre-licensing, exam, application, and contracting.',
  },
  {
    question: 'How long does licensing take?',
    answer:
      'Most agents are licensed and contracted in 2-4 weeks. Motivated agents often move faster through the self-paced pre-licensing step.',
  },
  {
    question: 'How much does it cost to get started?',
    answer:
      'Roughly $230-$330 total: pre-licensing, state exam, state licensing fee, and E&O insurance.',
  },
  {
    question: 'What carriers do you work with?',
    answer:
      'Carrier groups include UIG, Supreme, Ethos, and Heartland. Specific carriers and contracting links are available in the agent portal.',
  },
  {
    question: 'How do agents get paid?',
    answer:
      'Agents are paid commission directly by carriers. There is no salary and no income cap.',
  },
  {
    question: 'Is this remote or in-person?',
    answer:
      'Agents can work virtually or in person depending on their market and appointment strategy.',
  },
  {
    question: 'What training and support do you offer?',
    answer:
      'Direct mentorship, group training, scripts, presentations, CRM and dialer systems, lead sources, and back-office support.',
  },
  {
    question: 'How do I apply?',
    answer: `Reach out to Julian directly at ${contact.email}.`,
  },
]
