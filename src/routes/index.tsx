import { createFileRoute } from '@tanstack/react-router'
import { ContactBand } from '#/components/ContactBand'
import { FeatureShowcase } from '#/components/sections/FeatureShowcase'
import { HomeHero } from '#/components/sections/HomeHero'
import { LeaderboardPreview } from '#/components/sections/LeaderboardPreview'
import { MathSection } from '#/components/sections/MathSection'
import { ScheduleGrid } from '#/components/sections/ScheduleGrid'
import { StatGrid } from '#/components/sections/StatGrid'
import { WhySection } from '#/components/sections/WhySection'
import {
  compensationFormula,
  features,
  mathRows,
  schedule,
  stats,
  whyPillars,
} from '#/content/site'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <HomeHero />
      <section className="section-pad bg-navy-2">
        <div className="content-shell text-center">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-white">
            The insurance industry
            <br />
            <em className="text-blue-glow">needs more advisors.</em>
          </h2>
          <div className="mt-16">
            <StatGrid items={stats} />
          </div>
          <p className="mt-16 font-display text-4xl italic text-blue-glow">
            And we are looking to solve that problem.
          </p>
        </div>
      </section>
      <FeatureShowcase items={features} />
      <WhySection pillars={whyPillars} />
      <MathSection formula={compensationFormula} rows={mathRows} />
      <ScheduleGrid days={schedule} />
      <LeaderboardPreview />
      <ContactBand
        title="Ready to start your career with JG Financial?"
        detail="Julian Gaviria — Agency Owner"
        primary={{
          label: 'Email Julian',
          href: 'mailto:julianmginsurance@gmail.com',
        }}
        secondary={{ label: 'View Careers', to: '/careers' }}
      />
    </>
  )
}
