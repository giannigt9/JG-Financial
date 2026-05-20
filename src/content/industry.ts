import type { StatItem, VideoFeatureContent } from './types'

export const industryVideo = {
  eyebrow: 'Industry Breakdown',
  kind: 'placeholder',
  title: 'Industry Breakdown',
  description:
    'A focused walkthrough of the life insurance industry, the JG Financial model, and the opportunity available to agents.',
  status: 'Loom embed ready',
} satisfies VideoFeatureContent

export const industryMetrics = [
  { value: '$23T', label: 'U.S. Life Insurance Gap' },
  { value: '10K+', label: 'Americans Turn 65 Daily' },
  { value: '∞', label: 'Untapped Demand' },
] satisfies Array<StatItem>
