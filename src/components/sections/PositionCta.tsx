import { ButtonLink } from '#/components/ButtonLink'

export function PositionCta({ instagram }: { instagram: string }) {
  return (
    <div className="grid items-center gap-8 border border-blue-line bg-gradient-to-br from-navy via-navy-3 to-navy p-8 md:grid-cols-[1fr_auto] md:p-12">
      <div>
        <h2 className="font-display text-4xl text-white">
          <em className="text-blue-glow">Financial Services Agent</em>
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/62">
          Remote Position · JG Financial agents help clients with insurance,
          healthcare, and retirement planning across the United States.
        </p>
        <p className="mt-4 text-sm font-bold uppercase tracking-[.18em] text-blue-glow">
          To apply — DM your name to @jmgaviria_ on Instagram
        </p>
      </div>
      <ButtonLink href={instagram} className="btn-pulse">Apply Now</ButtonLink>
    </div>
  )
}
