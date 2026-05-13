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
          <BenefitGrid items={benefits} />
          <PositionCta email={contact.email} />
        </div>
      </section>
      <ContactBand
        detail={`${contact.owner} — Agency Owner`}
        primary={{ label: 'Email Julian', href: `mailto:${contact.email}` }}
        secondary={{ label: 'Get Licensed', to: appRoutes.getLicensed }}
        title="Ready to build your future?"
      />
    </>
  )
}
