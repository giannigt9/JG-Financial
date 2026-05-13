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
import type { BenefitIcon, BenefitItem } from '#/content/types'

const benefitIcons = {
  agency: Building2,
  coaching: Trophy,
  conventions: Plane,
  leads: ChartNoAxesCombined,
  payouts: Gem,
  products: MapPinned,
  remote: Globe2,
  residuals: WalletCards,
} satisfies Record<BenefitIcon, React.ComponentType<{ className?: string; size?: number }>>

export function BenefitGrid({ items }: { items: Array<BenefitItem> }) {
  return (
    <div className="grid border border-blue-line bg-blue-line md:grid-cols-2 xl:grid-cols-4">
      {items.map((benefit) => {
        const Icon = benefitIcons[benefit.icon]
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
