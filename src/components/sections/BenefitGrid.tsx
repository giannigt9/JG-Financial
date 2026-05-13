import { Icon } from '#/components/Icon'
import type { IconName } from '#/components/Icon'
import type { BenefitIcon, BenefitItem } from '#/content/types'

const benefitIcons = {
  agency: 'agency',
  coaching: 'trophy',
  conventions: 'plane',
  leads: 'chart',
  payouts: 'gem',
  products: 'map-pin',
  remote: 'globe',
  residuals: 'wallet',
} satisfies Record<BenefitIcon, IconName>

export function BenefitGrid({ items }: { items: Array<BenefitItem> }) {
  return (
    <div className="grid border border-blue-line bg-blue-line md:grid-cols-2 xl:grid-cols-4">
      {items.map((benefit) => {
        return (
          <article className="bg-navy p-8 text-center" key={benefit.title}>
            <Icon
              className="mx-auto text-blue-glow"
              name={benefitIcons[benefit.icon]}
              size={38}
            />
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
