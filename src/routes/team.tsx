import { createFileRoute } from '@tanstack/react-router'
import { ContactBand } from '#/components/ContactBand'
import { PageBanner } from '#/components/PageBanner'
import { TeamProfileGrid } from '#/components/sections/TeamProfileGrid'
import { appRoutes } from '#/config/routes'
import { contact } from '#/content/contact'
import { teamProfiles } from '#/content/team'

export const Route = createFileRoute('/team')({ component: Team })

function Team() {
  return (
    <>
      <PageBanner
        eyebrow="Meet the Partners"
        intro="Our partners have built production, mentored teams, and now lead agents into careers they are proud of."
        title={
          <>
            The proof
            <br />
            <em className="gradient-text">of concept.</em>
          </>
        }
      />
      <section className="section-pad bg-navy">
        <div className="content-shell">
          <TeamProfileGrid items={teamProfiles} />
        </div>
      </section>
      <ContactBand
        detail="Reach out and we will get you connected with the right partner."
        primary={{ label: 'Email Julian', href: `mailto:${contact.email}` }}
        secondary={{ label: 'Apply', to: appRoutes.careers }}
        title="Want to work with the team?"
      />
    </>
  )
}
