import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Diamond,
  Headphones,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { ButtonLink } from '#/components/ButtonLink'
import { SectionHeading } from '#/components/SectionHeading'
import type { features } from '#/content/site'

type Feature = (typeof features)[number]

const featureIcons = [
  PhoneCall,
  BarChart3,
  Diamond,
  Users,
  ShieldCheck,
  CalendarDays,
  Headphones,
  Sparkles,
]

export function FeatureShowcase({ items }: { items: Array<Feature> }) {
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
            const Icon = featureIcons[index] ?? Sparkles

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
                  <ButtonLink className="mt-8" to={feature.href} variant="text">
                    {feature.cta}
                    <ArrowRight size={16} />
                  </ButtonLink>
                </div>
                <div className="feature-panel">
                  <Icon size={104} strokeWidth={1.2} />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
