import { createFileRoute } from '@tanstack/react-router'
import { ContactBand } from '#/components/ContactBand'
import { PageBanner } from '#/components/PageBanner'
import { BenefitGrid } from '#/components/sections/BenefitGrid'
import { PositionCta } from '#/components/sections/PositionCta'
import { benefits, contact } from '#/content/site'

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
        secondary={{ label: 'Get Licensed', to: '/get-licensed' }}
        title="Ready to build your future?"
      />
    </>
  )
}
