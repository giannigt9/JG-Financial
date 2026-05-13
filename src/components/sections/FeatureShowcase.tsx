import { ButtonLink } from '#/components/ButtonLink'
import { Icon } from '#/components/Icon'
import type { IconName } from '#/components/Icon'
import { SectionHeading } from '#/components/SectionHeading'
import type { FeatureIcon, FeatureItem } from '#/content/types'

const featureIcons = {
  analytics: 'analytics',
  calendar: 'calendar',
  carrierAccess: 'shield-check',
  dialer: 'phone',
  growth: 'sparkles',
  mentorship: 'users',
  products: 'diamond',
  support: 'headphones',
} satisfies Record<FeatureIcon, IconName>

export function FeatureShowcase({ items }: { items: Array<FeatureItem> }) {
  return (
    <section className="section-pad bg-navy">
      <div className="content-shell">
        <SectionHeading
          eyebrow="Build Your Career With JG Financial"
          title="How do we do it?"
          accent="we do it?"
          intro="Built by agents. Built for agents. A full system designed to make you successful from your first dial to your first agency build."
        />
        <div className="mt-20 space-y-24">
          {items.map((feature, index) => {
            return (
              <article
                className="grid items-center gap-12 lg:grid-cols-2"
                key={feature.title}
              >
                <div className={index % 2 ? 'lg:order-2' : undefined}>
                  <p className="mb-5 text-xs font-bold uppercase tracking-[.45em] text-blue-bright">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display text-[clamp(2.25rem,4vw,3.75rem)] leading-tight text-white">
                    {feature.title}
                  </h3>
                  <div className="my-7 h-px w-12 bg-blue-bright" />
                  <p className="max-w-xl text-[15px] leading-8 text-white/62">
                    {feature.description}
                  </p>
                  <ButtonLink className="mt-8" {...feature.cta} variant="text">
                    {feature.cta.label}
                    <Icon name="arrow-right" size={16} />
                  </ButtonLink>
                </div>
                <div className="feature-panel">
                  <Icon
                    name={featureIcons[feature.icon]}
                    size={104}
                    strokeWidth={1.2}
                  />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
