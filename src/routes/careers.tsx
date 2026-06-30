import { createFileRoute } from '@tanstack/react-router'
import { ButtonLink } from '#/components/ButtonLink'
import { ContactBand } from '#/components/ContactBand'
import { PageBanner } from '#/components/PageBanner'
import { BenefitGrid } from '#/components/sections/BenefitGrid'
import { PositionCta } from '#/components/sections/PositionCta'
import { appRoutes } from '#/config/routes'
import { benefits } from '#/content/careers'
import { contact } from '#/content/contact'

export const Route = createFileRoute('/careers')({ component: Careers })

function Careers() {
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
        action={
          <div className="flex flex-col items-center gap-4 pb-8">
            <ButtonLink href={contact.instagram} size="lg" className="btn-pulse">
              Apply Now
            </ButtonLink>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-glow">
              DM your name to @jmgaviria_ on Instagram
            </p>
          </div>
        }
      />
      <section className="section-pad bg-navy-2">
        <div className="content-shell">
          <BenefitGrid items={benefits} />
          <PositionCta instagram={contact.instagram} />
        </div>
      </section>
      <ContactBand
        detail={`${contact.owner}, ${contact.ownerTitle}`}
        primary={{ label: 'Email Julian', href: `mailto:${contact.email}` }}
        secondary={{ label: 'Get Licensed', to: appRoutes.getLicensed }}
        title="Ready to build your future?"
      />
    </>
  )
}
