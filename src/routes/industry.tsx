import { createFileRoute } from '@tanstack/react-router'
import { ContactBand } from '#/components/ContactBand'
import { PageBanner } from '#/components/PageBanner'
import { StatGrid } from '#/components/sections/StatGrid'
import { VideoFeature } from '#/components/sections/VideoFeature'
import { appRoutes } from '#/config/routes'
import { contact } from '#/content/contact'
import { industryMetrics } from '#/content/industry'

export const Route = createFileRoute('/industry')({ component: Industry })

function Industry() {
  return (
    <>
      <PageBanner
        eyebrow="Industry Breakdown"
        intro="Watch Julian walk through how the life insurance industry works, what makes JG different, and where the real opportunity is for agents."
        title={
          <>
            The full breakdown
            <br />
            <em className="gradient-text">of this industry.</em>
          </>
        }
      />
      <section className="section-pad bg-navy-2">
        <div className="content-shell max-w-5xl">
          <VideoFeature />
          <div className="mt-12">
            <StatGrid columns="md:grid-cols-3" items={industryMetrics} />
          </div>
        </div>
      </section>
      <ContactBand
        detail="Get answers and start the conversation."
        primary={{ label: 'Email Julian', href: `mailto:${contact.email}` }}
        secondary={{ label: 'Read FAQ', to: appRoutes.faq }}
        title="Got questions after the video?"
      />
    </>
  )
}
