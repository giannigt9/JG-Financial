import { createFileRoute } from '@tanstack/react-router'
import { Play } from 'lucide-react'
import { ContactBand } from '#/components/ContactBand'
import { PageBanner } from '#/components/PageBanner'
import { contact } from '#/content/site'

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
          <div className="border border-blue-line bg-gradient-to-br from-navy-2 to-navy p-4 shadow-2xl shadow-black/40">
            <div className="aspect-video bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,.22),transparent_68%),linear-gradient(135deg,#0a1f4d,#122c63)]">
              <div className="grid h-full place-items-center p-8 text-center">
                <div>
                  <div className="mx-auto grid size-24 place-items-center rounded-full border border-blue-line bg-blue-bright/10 text-blue-glow">
                    <Play fill="currentColor" size={34} />
                  </div>
                  <p className="mt-6 font-display text-3xl italic text-white">
                    Industry Breakdown
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[.22em] text-white/42">
                    Loom embed ready
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 grid border border-blue-line bg-blue-line md:grid-cols-3">
            {[
              ['$23T', 'U.S. Life Insurance Gap'],
              ['10K+', 'Americans Turn 65 Daily'],
              ['∞', 'Untapped Demand'],
            ].map(([value, label]) => (
              <article className="bg-navy p-8 text-center" key={label}>
                <p className="gradient-text font-display text-6xl">{value}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[.18em] text-white/45">
                  {label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactBand
        detail="Get answers and start the conversation."
        primary={{ label: 'Email Julian', href: `mailto:${contact.email}` }}
        secondary={{ label: 'Read FAQ', to: '/faq' }}
        title="Got questions after the video?"
      />
    </>
  )
}
