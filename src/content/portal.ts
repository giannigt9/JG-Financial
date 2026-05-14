export type PortalAction = {
  download?: string
  href: string
  label: string
}

export type PortalLicenseCost = {
  cost: string
  state: string
}

export type PortalSection = {
  actions?: Array<PortalAction>
  badge: string
  body: string
  licenseCosts?: Array<PortalLicenseCost>
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
            href: 'https://app.suranceinc.com/registration/getStarted?company=46f2f9f7-cea7-4894-bc0a-d5e93f8c89d0',
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
            href: 'https://app.suranceinc.com/registration/getStarted?company=83c70ef1-79c9-49a6-b89c-cffe14b0b76e',
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
            href: 'https://docs.google.com/forms/d/e/1FAIpQLSeBh1nVJpcwDrxBRr0g8ehYZi9DkBLk0PJiMTk_lYYHb6mFKQ/viewform',
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
