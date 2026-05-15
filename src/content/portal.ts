export type PortalAction = {
  download?: string
  href: string
  label: string
}

export type PortalLicenseCost = {
  cost: string
  state: string
}

export type PortalMilestone = {
  detail: string
  label: string
}

export type PortalSection = {
  actions?: Array<PortalAction>
  badge: string
  body: string
  licenseCosts?: Array<PortalLicenseCost>
  milestones?: Array<PortalMilestone>
  stateCodes?: Array<string>
  title: string
}

export type PortalTab = {
  id: string
  label: string
  sections: Array<PortalSection>
}

const stateBuyingSection: PortalSection = {
  title: 'Dialer Buying Option',
  badge: 'States to Buy',
  body: 'Pick up these states when buying dialer inventory.',
  actions: [
    {
      label: 'Buy States on NIPR',
      href: 'https://nipr.com/licensing-center',
    },
  ],
  stateCodes: [
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
  ],
  licenseCosts: [
    { state: 'Michigan', cost: '$10' },
    { state: 'Kansas', cost: '$40' },
    { state: 'Indiana', cost: '$80' },
    { state: 'Louisiana', cost: '$75' },
    { state: 'Idaho', cost: '$80' },
    { state: 'Utah', cost: '$80' },
  ],
}

const directUplineDetailsSection: PortalSection = {
  title: 'Send Agent Details',
  badge: 'Direct Upline',
  body: 'Send your name, NPN, phone number, and email to your direct upline after completing your contracting steps.',
}

const newAgentLeadStructureSection: PortalSection = {
  title: 'New Agent Lead Structure',
  badge: 'Up to 1 Month Free',
  body: 'All new agents start with 7 days of unlimited free leads and can unlock additional free lead access by closing each weekly target.',
  milestones: [
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
  ],
}

export const portalTabs = [
  {
    id: 'contracting',
    label: 'Contracting',
    sections: [
      {
        title: 'JG Financial Carriers - UIG',
        badge: 'Via SuranceBay',
        body: 'American Amicable, American Home Life, F&G Life, Mutual of Omaha, and Transamerica.',
        actions: [
          {
            label: 'Contract via SuranceBay',
            href: 'https://accounts.surancebay.com/oauth/authorize?redirect_uri=https:%2F%2Fsurelc.surancebay.com%2Fproducer%2Foauth%3FreturnUrl%3D%2Fprofile%2Fcontact-info%3FgaId%3D868%26gaId%3D868%26branch%3DEnhance%2520Companies%26branchVisible%3Dtrue%26branchEditable%3Dfalse%26branchRequired%3Dtrue%26autoAdd%3Dfalse%26requestMethod%3DGET&gaId=868&client_id=surecrmweb&response_type=code',
          },
        ],
      },
      {
        title: 'JG Financial Carriers - Supreme',
        badge: 'Via SuranceBay',
        body: 'Instabrain, SBLI, Foresters, Transamerica, and more as appointments expand.',
        actions: [
          {
            label: 'Contract via SuranceBay',
            href: 'https://surelc.surancebay.com/sbweb/login.jsp?branch=JG%20Financial&branchEditable=off&branchRequired=on&branchVisible=on&gaId=1279&gaName=Supreme%20Life%20Brokerage',
          },
        ],
      },
      {
        title: 'Ethos Life Insurance',
        badge: 'Reparent Only',
        body: 'Ethos appointment is included in the SuranceBay contracting flow. The reparent link is for agents already appointed through another IMO.',
        actions: [
          {
            label: 'Reparent from Another IMO',
            href: 'https://docs.google.com/forms/d/e/1FAIpQLSeZBE5V-jr0EEwVAZYPMA0SxmNaWMalkYbdKF5GLN3KBy0ssw/viewform',
          },
        ],
      },
      {
        title: 'JG Financial Carriers - Heartland',
        badge: 'Manual Contracting',
        body: 'Baltimore Life, United Home Life, and Polish Falcons of America. Contact your direct upline to get appointed.',
      },
      directUplineDetailsSection,
      {
        title: 'AgentSpace',
        badge: 'Active Agents',
        body: 'Already contracted? Log in to AgentSpace to manage your book of business and carrier tools.',
        actions: [
          {
            label: 'Open AgentSpace',
            href: 'https://app.useagentspace.com/login?redirect=%2F',
          },
        ],
      },
    ],
  },
  {
    id: 'training',
    label: 'Training',
    sections: [
      {
        title: 'Training Resources',
        badge: 'Coming Soon',
        body: 'Scripts, presentation decks, role-play recordings, training videos, and the JG Financial sales playbook will live here.',
      },
    ],
  },
  {
    id: 'dialer',
    label: 'Dialer',
    sections: [
      {
        title: 'Unlimited Missed Inbound FEX Dialer',
        badge: '$250/week',
        body: 'Power dialer access for missed inbound and FEX leads with JG Financial setup.',
        actions: [
          {
            label: 'Sign Up',
            href: 'https://whop.com/checkout/plan_EKIRLFsretJfx',
          },
        ],
      },
      {
        title: 'Unlimited Survey + FEX Dialer',
        badge: '$375/week',
        body: 'Higher-capacity dialer access for producers grinding 5+ hours a day.',
        actions: [
          {
            label: 'Sign Up',
            href: 'https://whop.com/checkout/plan_x4JbepLdGntTK/',
          },
        ],
      },
      newAgentLeadStructureSection,
      stateBuyingSection,
    ],
  },
  {
    id: 'promo',
    label: 'Promo Guidelines',
    sections: [
      {
        title: 'Promotional Guidelines',
        badge: 'PDF',
        body: 'Download the approved JG Financial promotional guidelines before posting or sharing brand materials.',
        actions: [
          {
            label: 'Download Guidelines',
            href: '/assets/jg_financial_promo_guidelines.pdf',
            download: 'jg_financial_promo_guidelines.pdf',
          },
        ],
      },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    sections: [
      {
        title: 'JG Financial Script Library',
        badge: 'Google Docs',
        body: 'Tested scripts for referrals, objections, inbounds, surveys, missed inbounds, and more.',
        actions: [
          {
            label: 'Master Script',
            href: 'https://docs.google.com/document/d/1i3bNu9Hct4kEKCug47yO-9ODv4mB-e5b-zs7yFMUtbc/edit?tab=t.0#heading=h.t95jbq1uvv0x',
          },
          {
            label: 'Referral Script',
            href: 'https://docs.google.com/document/d/1gUbGZNyBDQArUjVpLAk8iRL1jH3vHpVJDerFC1N-AeY/edit?tab=t.0',
          },
          {
            label: 'Objection Script',
            href: 'https://docs.google.com/document/d/13N3PO1xEq7zxowcpzARia4_K3gaoqkfHuIgJTU08AjY/edit?tab=t.0',
          },
          {
            label: 'Inbound Script',
            href: 'https://docs.google.com/document/d/1lLPEX9ja0GNfEQg3cNvLSsojKClIxu1cYACONT9k-Wo/edit?tab=t.0',
          },
          {
            label: 'Survey 3.0 Script',
            href: 'https://docs.google.com/document/d/10ZbZp8844XQD0311Jef-6c8DGGd4845pdbER_parTD0/edit?tab=t.0',
          },
        ],
      },
      {
        title: 'Lead / Dialer Breakdown',
        badge: 'Loom',
        body: 'A quick walkthrough for dialer setup and lead workflow.',
        actions: [
          {
            label: 'Watch on Loom',
            href: 'https://www.loom.com/share/3ec7d0f245334b7192098f4f5a451858',
          },
        ],
      },
    ],
  },
] satisfies Array<PortalTab>
