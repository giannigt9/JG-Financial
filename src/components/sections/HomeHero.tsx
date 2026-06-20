import { ButtonLink } from '#/components/ButtonLink'
import { appRoutes } from '#/config/routes'

export function HomeHero() {
  return (
    <section className="hero-shell flex items-center justify-center overflow-hidden px-6 pb-6 pt-20 text-center md:px-14 md:pb-12 md:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_25%,rgba(59,130,246,.28),transparent_55%),radial-gradient(ellipse_at_70%_70%,rgba(123,168,255,.16),transparent_55%),linear-gradient(135deg,#061536,#0a1f4d_52%,#061536)]" />
      <div className="vein-overlay" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <p className="mx-auto mb-4 flex items-center justify-center gap-5 text-[11px] font-bold uppercase tracking-[.5em] text-blue-glow md:mb-9">
          <span className="h-px w-12 bg-blue-bright" />
          JG Financial
          <span className="h-px w-12 bg-blue-bright" />
        </p>
        <h1 className="font-display text-[clamp(2rem,6vw,5rem)] font-light leading-[.92] tracking-normal text-white">
          Create The Lifestyle
          <br />
          <em className="gradient-text font-light">You Deserve</em>
        </h1>
        <div className="mx-auto my-3 h-8 w-px bg-gradient-to-b from-transparent via-blue-bright to-transparent md:my-6 md:h-12" />
        <p className="font-display text-xl italic tracking-[.12em] text-blue-pale">
          Build the income · Build the legacy · Build the life
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4 md:mt-8">
          <ButtonLink to={appRoutes.careers}>Join the Agency</ButtonLink>
          <ButtonLink to={appRoutes.getLicensed} variant="outline">
            Get Licensed
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
