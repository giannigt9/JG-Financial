import {
  Building2,
  ChartNoAxesCombined,
  Gem,
  Globe2,
  MapPinned,
  Plane,
  Trophy,
  WalletCards,
} from 'lucide-react'
import type { benefits } from '#/content/site'

type Benefit = (typeof benefits)[number]

const benefitIcons = [
  Building2,
  Globe2,
  WalletCards,
  MapPinned,
  Gem,
  Plane,
  Trophy,
  ChartNoAxesCombined,
]

export function BenefitGrid({ items }: { items: Array<Benefit> }) {
  return (
    <div className="grid border border-blue-line bg-blue-line md:grid-cols-2 xl:grid-cols-4">
      {items.map((benefit, index) => {
        const Icon = benefitIcons[index] ?? Trophy
        return (
          <article className="bg-navy p-8 text-center" key={benefit.title}>
            <Icon className="mx-auto text-blue-glow" size={38} />
            <h2 className="mt-6 font-display text-3xl uppercase tracking-wide text-blue-glow">
              {benefit.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/58">
              {benefit.detail}
            </p>
          </article>
        )
      })}
    </div>
  )
}
