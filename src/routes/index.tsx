import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Diamond,
  Headphones,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
} from 'lucide-react'
import { ButtonLink } from '#/components/ButtonLink'
import { ContactBand } from '#/components/ContactBand'
import { SectionHeading } from '#/components/SectionHeading'
import {
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
      <section className="hero-shell section-pad flex min-h-[760px] items-center justify-center overflow-hidden pt-36 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_25%,rgba(59,130,246,.28),transparent_55%),radial-gradient(ellipse_at_70%_70%,rgba(123,168,255,.16),transparent_55%),linear-gradient(135deg,#061536,#0a1f4d_52%,#061536)]" />
        <div className="vein-overlay" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <p className="mx-auto mb-9 flex items-center justify-center gap-5 text-[11px] font-bold uppercase tracking-[.5em] text-blue-glow">
            <span className="h-px w-12 bg-blue-bright" />
            JG Financial
            <span className="h-px w-12 bg-blue-bright" />
          </p>
          <h1 className="font-display text-[clamp(4rem,11vw,9.5rem)] font-light leading-[.92] tracking-normal text-white">
            Create The Lifestyle
            <br />
            <em className="gradient-text font-light">You Deserve</em>
          </h1>
          <div className="mx-auto my-9 h-20 w-px bg-gradient-to-b from-transparent via-blue-bright to-transparent" />
          <p className="font-display text-xl italic tracking-[.12em] text-blue-pale">
            Build the income · Build the legacy · Build the life
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <ButtonLink to="/careers">Join the Agency</ButtonLink>
            <ButtonLink to="/get-licensed" variant="outline">
              Get Licensed
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy-2">
        <div className="content-shell text-center">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-white">
            The insurance industry
            <br />
            <em className="text-blue-glow">needs more advisors.</em>
          </h2>
          <div className="mt-16 grid overflow-hidden border border-blue-line md:grid-cols-2 xl:grid-cols-5">
            {stats.map((stat) => (
              <article
                className="border-b border-r border-blue-line p-8 last:border-r-0 xl:border-b-0"
                key={stat.value}
              >
                <p className="gradient-text font-display text-6xl font-semibold">
                  {stat.value}
                </p>
                <p className="mt-4 text-sm leading-7 text-white/62">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-16 font-display text-4xl italic text-blue-glow">
            And we are looking to solve that problem.
          </p>
        </div>
      </section>

      <section className="section-pad bg-navy">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Build Your Career With JG Financial"
            title="How do we do it?"
            accent="we do it?"
            intro="Built by agents. Built for agents. A full system designed to make you successful from your first dial to your first agency build."
          />
          <div className="mt-20 space-y-24">
            {features.map((feature, index) => (
              <article
                className="grid items-center gap-12 lg:grid-cols-2"
                key={feature.title}
              >
                <div className={index % 2 ? 'lg:order-2' : undefined}>
                  <p className="mb-5 text-xs font-bold uppercase tracking-[.45em] text-blue-bright">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display text-[clamp(2.25rem,4vw,3.75rem)] leading-tight text-white">
                    {feature.title}
                  </h3>
                  <div className="my-7 h-px w-12 bg-blue-bright" />
                  <p className="max-w-xl text-[15px] leading-8 text-white/62">
                    {feature.description}
                  </p>
                  <ButtonLink className="mt-8" to={feature.href} variant="text">
                    {feature.cta}
                    <ArrowRight size={16} />
                  </ButtonLink>
                </div>
                <div className="feature-panel">
                  <FeatureIcon index={index} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-gradient-to-b from-navy to-[#020920]">
        <div className="content-shell max-w-5xl text-center">
          <p className="eyebrow">Why JG Financial</p>
          <h2 className="gradient-text font-display text-[clamp(4rem,9vw,8rem)] leading-none">
            Why JG
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/78">
            There is a reason our agents do more and win more than any other
            organization in the insurance business: we provide more to the
            independent agent.
          </p>
          <div className="mt-12 grid border border-blue-line bg-blue-line md:grid-cols-3">
            {whyPillars.map((pillar) => (
              <article className="bg-navy p-8" key={pillar.name}>
                <h3 className="font-display text-3xl italic text-blue-glow">
                  {pillar.name}
                </h3>
                <p className="mt-2 text-sm text-white/55">{pillar.detail}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-[15px] leading-8 text-white/62">
            We provide more to our agents because we are a company created for
            agents by agents. Our focus on personal development and mentorship
            helps agents succeed not only financially, but in all areas of life.
          </p>
        </div>
      </section>

      <section className="section-pad bg-navy-2">
        <div className="content-shell">
          <SectionHeading
            eyebrow="The Numbers"
            title="Your first $10K month."
            accent="$10K month."
            intro="Real math. Real activity. Real results. Here is exactly what it takes, broken down to the dial."
          />
          <div className="mt-16 grid border border-blue-line bg-blue-line md:grid-cols-2">
            {mathRows.map((row) => (
              <article
                className="flex items-center gap-5 bg-navy p-7"
                key={row.label}
              >
                <Target className="shrink-0 text-blue-glow" size={24} />
                <p className="text-[15px] leading-7 text-white/90">
                  <strong className="font-display text-xl italic text-blue-glow">
                    {row.value}
                  </strong>{' '}
                  {row.label}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12 border border-blue-line bg-gradient-to-br from-navy to-navy-3 p-8 text-center">
            <p className="eyebrow mb-4">The Compensation Math</p>
            <p className="font-display text-[clamp(1.5rem,3vw,2.25rem)] italic leading-snug text-white/88">
              $1,000 avg AP × <span className="text-blue-glow">75%</span> Comp
              × <span className="text-blue-glow">75%</span> Advance ×{' '}
              <span className="text-blue-glow">75%</span> Persistency = $422
              per sale
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy">
        <div className="content-shell max-w-[1500px]">
          <SectionHeading
            eyebrow="The Daily Grind"
            title="JG Financial Agency Schedule"
            accent="Agency Schedule"
            intro="All times are Eastern Standard Time. This is the rhythm built by producers who hit the numbers."
          />
          <div className="mt-16 grid border border-blue-line bg-blue-line md:grid-cols-2 xl:grid-cols-7">
            {schedule.map((day) => (
              <article className="bg-navy-2" key={day.day}>
                <h3 className="bg-blue-900/40 px-4 py-4 text-center text-xs font-bold uppercase tracking-[.18em] text-white">
                  {day.day}
                </h3>
                {day.blocks.map((block) => (
                  <div className="border-t border-blue-line p-4" key={block.time}>
                    <p className="text-[10px] font-bold uppercase tracking-[.16em] text-blue-glow">
                      {block.time}
                    </p>
                    <p className="mt-2 font-display text-lg font-semibold text-white">
                      {block.activity}
                    </p>
                    <p className="mt-1 text-xs leading-6 text-white/55">
                      {block.note}
                    </p>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

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

      <ContactBand
        title="Ready to start your career with JG Financial?"
        detail="Julian Gaviria — Agency Owner"
        primary={{ label: 'Email Julian', href: 'mailto:julianmginsurance@gmail.com' }}
        secondary={{ label: 'View Careers', to: '/careers' }}
      />
    </>
  )
}

function FeatureIcon({ index }: { index: number }) {
  const icons = [
    PhoneCall,
    BarChart3,
    Diamond,
    Users,
    ShieldCheck,
    CalendarDays,
    Headphones,
    Sparkles,
  ]
  const Icon = icons[index] ?? Sparkles
  return <Icon size={104} strokeWidth={1.2} />
}
