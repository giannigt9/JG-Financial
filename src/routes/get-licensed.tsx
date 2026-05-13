import { createFileRoute } from '@tanstack/react-router'
import { ContactBand } from '#/components/ContactBand'
import { PageBanner } from '#/components/PageBanner'
import { CostSummary } from '#/components/sections/CostSummary'
import { ProcessGrid } from '#/components/sections/ProcessGrid'
import { contact } from '#/content/contact'
import { licenseSteps, onboardingCosts } from '#/content/licensing'

export const Route = createFileRoute('/get-licensed')({
  component: GetLicensed,
})

function GetLicensed() {
  return (
    <>
      <PageBanner
        eyebrow="Licensing Guide"
        intro="2-4 weeks · ~$230-$330 total · A clear, supported path from day one to your first sale."
        title={
          <>
            Not licensed yet?
            <br />
            <em className="gradient-text">We will walk you through it.</em>
          </>
        }
      />
      <section className="section-pad bg-navy-2">
        <div className="content-shell">
          <ProcessGrid steps={licenseSteps} />
          <CostSummary rows={onboardingCosts} />
        </div>
      </section>
      <ContactBand
        detail="Get the full state-by-state guide or email Julian to start today."
        primary={{ label: 'State Guide', href: contact.stateGuide }}
        secondary={{ label: 'Email Julian', href: `mailto:${contact.email}` }}
        title="Ready to get licensed?"
      />
    </>
  )
}
