import type { whyPillars } from '#/content/site'

type Pillar = (typeof whyPillars)[number]

export function WhySection({ pillars }: { pillars: Array<Pillar> }) {
  return (
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
          {pillars.map((pillar) => (
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
  )
}
