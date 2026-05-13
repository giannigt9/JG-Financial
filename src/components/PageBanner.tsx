export function PageBanner({
  eyebrow,
  intro,
  title,
}: {
  eyebrow: string
  intro?: string
  title: React.ReactNode
}) {
  return (
    <section className="hero-shell flex min-h-[520px] items-center justify-center overflow-hidden px-6 pt-28 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,130,246,.18),transparent_64%),linear-gradient(135deg,#061536,#0a1f4d)]" />
      <div className="vein-overlay" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 font-display text-[clamp(3.5rem,8vw,7rem)] font-light leading-none text-white">
          {title}
        </h1>
        <div className="mx-auto my-7 h-px w-16 bg-blue-bright" />
        {intro ? (
          <p className="mx-auto max-w-3xl text-[15px] leading-8 text-white/62">
            {intro}
          </p>
        ) : null}
      </div>
    </section>
  )
}
