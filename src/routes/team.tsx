import { createFileRoute } from '@tanstack/react-router'
import { ContactBand } from '#/components/ContactBand'
import { PageBanner } from '#/components/PageBanner'
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
          <div className="grid gap-8 md:grid-cols-3">
            {managers.map((manager) => (
              <article
                className="overflow-hidden border border-blue-line bg-gradient-to-b from-navy-2 to-navy"
                key={manager.name}
              >
                <div className="grid aspect-square place-items-center border-b-2 border-blue-bright bg-[radial-gradient(circle_at_30%_25%,rgba(123,168,255,.2),transparent_52%),linear-gradient(135deg,#122c63,#061536)]">
                  <div className="text-center">
                    <p className="gradient-text font-display text-7xl italic">
                      {manager.initials}
                    </p>
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[.25em] text-white/32">
                      Add Photo
                    </p>
                  </div>
                </div>
                <div className="p-7">
                  <h2 className="font-display text-3xl text-white">
                    {manager.name}
                  </h2>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[.18em] text-blue-glow">
                    {manager.title}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-white/60">
                    {manager.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
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
