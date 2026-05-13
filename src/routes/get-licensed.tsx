import { createFileRoute } from '@tanstack/react-router'
import { ButtonLink } from '#/components/ButtonLink'
import { ContactBand } from '#/components/ContactBand'
import { PageBanner } from '#/components/PageBanner'
import { contact, licenseSteps } from '#/content/site'

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
          <div className="grid border border-blue-line bg-blue-line md:grid-cols-2 xl:grid-cols-3">
            {licenseSteps.map((step, index) => (
              <article className="bg-navy p-8" key={step.title}>
                <p className="gradient-text font-display text-6xl italic">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-6 font-display text-3xl text-white">
                  {step.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/62">
                  {step.description}
                </p>
                <p className="mt-6 inline-block border border-blue-line px-3 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-blue-glow">
                  {step.badge}
                </p>
                <div className="mt-5">
                  {step.link ? (
                    <ButtonLink href={step.link.href} variant="text">
                      {step.link.label}
                    </ButtonLink>
                  ) : null}
                  {step.internalLink ? (
                    <ButtonLink to={step.internalLink.to} variant="text">
                      {step.internalLink.label}
                    </ButtonLink>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-14 overflow-hidden border border-blue-line bg-gradient-to-br from-navy to-navy-2">
            <h2 className="bg-blue-900/40 p-6 font-display text-3xl text-white">
              Onboarding <em className="text-blue-glow">Cost Summary</em>
            </h2>
            {[
              ['Pre-Licensing - Xcel Solutions', '$30 with code 2020'],
              ['State Licensing Exam', '$40-$100 / attempt'],
              ['Resident License Fee', 'Varies by state'],
              ['Carrier Contracting', 'Free'],
              ['E&O Insurance', '$127 down + $27/mo'],
              ['Estimated Out-of-Pocket Total', '~$230-$330'],
            ].map(([label, value]) => (
              <div
                className="flex justify-between gap-4 border-t border-blue-line px-6 py-4 text-sm"
                key={label}
              >
                <span className="text-white/60">{label}</span>
                <strong className="text-right text-white">{value}</strong>
              </div>
            ))}
          </div>
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
