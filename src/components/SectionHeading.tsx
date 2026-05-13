export function SectionHeading({
  accent,
  eyebrow,
  intro,
  title,
}: {
  accent?: string
  eyebrow: string
  intro?: string
  title: string
}) {
  const displayTitle =
    accent && title.includes(accent)
      ? title.replace(accent, '').trim()
      : title

  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 font-display text-[clamp(2.75rem,6vw,5.25rem)] font-light leading-tight text-white">
        {displayTitle}{' '}
        {accent ? <em className="text-blue-glow">{accent}</em> : null}
      </h2>
      <div className="mx-auto my-7 h-px w-16 bg-blue-bright" />
      {intro ? (
        <p className="mx-auto max-w-2xl text-[15px] leading-8 text-white/62">
          {intro}
        </p>
      ) : null}
    </div>
  )
}
