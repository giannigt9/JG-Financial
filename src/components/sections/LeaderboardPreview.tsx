import { Trophy } from 'lucide-react'
import { SectionHeading } from '#/components/SectionHeading'

export function LeaderboardPreview() {
  return (
    <section className="section-pad bg-gradient-to-b from-navy-2 to-navy">
      <div className="content-shell max-w-5xl">
        <SectionHeading
          eyebrow="Top Producers"
          title="Live Leaderboard"
          accent="Leaderboard"
          intro="Real-time production rankings are prepared for AgentSpace integration."
        />
        <div className="mt-14 border border-blue-line bg-gradient-to-br from-navy via-navy-3 to-navy p-8 text-center md:p-14">
          <Trophy className="mx-auto text-blue-glow" size={42} />
          <p className="mt-6 font-display text-3xl italic text-white">
            Live data integration coming soon.
          </p>
          <p className="mt-3 text-sm uppercase tracking-[.18em] text-white/42">
            Connecting to AgentSpace
          </p>
        </div>
      </div>
    </section>
  )
}
