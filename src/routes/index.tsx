import { createFileRoute } from '@tanstack/react-router'
import { ContactBand } from '#/components/ContactBand'
import { FeatureShowcase } from '#/components/sections/FeatureShowcase'
import { HomeHero } from '#/components/sections/HomeHero'
import { LeaderboardPreview } from '#/components/sections/LeaderboardPreview'
import { MathSection } from '#/components/sections/MathSection'
import { ScheduleGrid } from '#/components/sections/ScheduleGrid'
import { StatGrid } from '#/components/sections/StatGrid'
import { VideoFeature } from '#/components/sections/VideoFeature'
import { WhySection } from '#/components/sections/WhySection'
import { appRoutes } from '#/config/routes'
import { contact } from '#/content/contact'
import {
  compensationFormula,
  features,
  mathRows,
  schedule,
  stats,
  welcomeVideo,
  whyPillars,
} from '#/content/home'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <HomeHero />
      <section className="section-pad bg-navy">
        <div className="content-shell max-w-5xl">
          <VideoFeature video={welcomeVideo} />
        </div>
      </section>
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
          href: `mailto:${contact.email}`,
        }}
        secondary={{ label: 'View Careers', to: appRoutes.careers }}
      />
    </>
  )
}
