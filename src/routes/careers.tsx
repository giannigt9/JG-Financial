import { createFileRoute } from '@tanstack/react-router'
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
import { ButtonLink } from '#/components/ButtonLink'
import { ContactBand } from '#/components/ContactBand'
import { PageBanner } from '#/components/PageBanner'
import { benefits, contact } from '#/content/site'

export const Route = createFileRoute('/careers')({ component: Careers })

function Careers() {
  const icons = [
    Building2,
    Globe2,
    WalletCards,
    MapPinned,
    Gem,
    Plane,
    Trophy,
    ChartNoAxesCombined,
  ]

  return (
    <>
      <PageBanner
        eyebrow="Join JG Financial"
        title={
          <>
            A Winning Culture
            <br />
            <em className="gradient-text">That Continues To Grow</em>
          </>
        }
      />
      <section className="section-pad bg-navy-2">
        <div className="content-shell">
          <div className="grid border border-blue-line bg-blue-line md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = icons[index] ?? Trophy
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
          <div className="mt-14 grid items-center gap-8 border border-blue-line bg-gradient-to-br from-navy via-navy-3 to-navy p-8 md:grid-cols-[1fr_auto] md:p-12">
            <div>
              <h2 className="font-display text-4xl text-white">
                <em className="text-blue-glow">Financial Services Agent</em>
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/62">
                Remote Position · JG Financial agents help clients with
                insurance, healthcare, and retirement planning across the United
                States.
              </p>
            </div>
            <ButtonLink href={`mailto:${contact.email}`}>Apply Now</ButtonLink>
          </div>
        </div>
      </section>
      <ContactBand
        detail={`${contact.owner} — Agency Owner`}
        primary={{ label: 'Email Julian', href: `mailto:${contact.email}` }}
        secondary={{ label: 'Get Licensed', to: '/get-licensed' }}
        title="Ready to build your future?"
      />
    </>
  )
}
