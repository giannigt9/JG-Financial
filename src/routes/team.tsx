import { createFileRoute } from '@tanstack/react-router'
import { ContactBand } from '#/components/ContactBand'
import { PageBanner } from '#/components/PageBanner'
import { ManagerGrid } from '#/components/sections/ManagerGrid'
import { contact, managers } from '#/content/site'

export const Route = createFileRoute('/team')({ component: Team })

function Team() {
  return (
    <>
      <PageBanner
        eyebrow="Meet the Managers"
        intro="Our managers have built production, mentored teams, and now lead agents into careers they are proud of."
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
          <div className="mb-10 border border-dashed border-blue-bright/70 bg-blue-bright/10 p-5 text-center text-xs uppercase tracking-[.18em] text-blue-pale">
            Placeholder profiles are ready for real manager photos and bios.
          </div>
          <ManagerGrid items={managers} />
        </div>
      </section>
      <ContactBand
        detail="Reach out and we will get you connected with the right manager."
        primary={{ label: 'Email Julian', href: `mailto:${contact.email}` }}
        secondary={{ label: 'Apply', to: '/careers' }}
        title="Want to work with the team?"
      />
    </>
  )
}
