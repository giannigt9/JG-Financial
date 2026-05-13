import { ButtonLink } from './ButtonLink'
import type { LinkCta } from '#/content/types'

export function ContactBand({
  detail,
  primary,
  secondary,
  title,
}: {
  detail: string
  primary: LinkCta
  secondary?: LinkCta
  title: string
}) {
  return (
    <section className="border-y border-blue-line bg-gradient-to-br from-navy via-navy-3 to-navy px-6 py-20">
      <div className="content-shell grid items-center gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <h2 className="font-display text-[clamp(2.25rem,4vw,3.75rem)] leading-tight text-white">
            {title}
          </h2>
          <p className="mt-4 text-sm text-white/62">{detail}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <CtaButton cta={primary} />
          {secondary ? <CtaButton cta={secondary} variant="outline" /> : null}
        </div>
      </div>
    </section>
  )
}

function CtaButton({
  cta,
  variant = 'primary',
}: {
  cta: LinkCta
  variant?: 'outline' | 'primary'
}) {
  return (
    <ButtonLink {...cta} variant={variant}>
      {cta.label}
    </ButtonLink>
  )
}
