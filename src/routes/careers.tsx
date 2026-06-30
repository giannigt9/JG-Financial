import { createFileRoute } from '@tanstack/react-router'
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
        compact
        eyebrow="Join JG Financial"
        title={
          <>
            A Winning Culture
            <br />
            <em className="gradient-text">That Continues To Grow</em>
          </>
        }
      />
      <section className="bg-navy-2 px-[clamp(1.5rem,5vw,3.75rem)] pt-6 pb-0">
        <div className="content-shell">
          <PositionCta instagram={contact.instagram} />
        </div>
      </section>
      <section className="bg-navy-2 px-[clamp(1.5rem,5vw,3.75rem)] pt-6 pb-[clamp(5rem,9vw,10rem)]">
        <div className="content-shell">
          <BenefitGrid items={benefits} />
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
