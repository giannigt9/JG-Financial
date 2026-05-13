import { ButtonLink } from '#/components/ButtonLink'
import type { ProcessStep } from '#/content/types'

export function ProcessGrid({ steps }: { steps: Array<ProcessStep> }) {
  return (
    <div className="grid border border-blue-line bg-blue-line md:grid-cols-2 xl:grid-cols-3">
      {steps.map((step, index) => (
        <article className="bg-navy p-8" key={step.title}>
          <p className="gradient-text font-display text-6xl italic">
            {String(index + 1).padStart(2, '0')}
          </p>
          <h2 className="mt-6 font-display text-3xl text-white">
            {step.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/62">
            {step.description}
          </p>
          <p className="mt-6 inline-block border border-blue-line px-3 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-blue-glow">
            {step.badge}
          </p>
          <div className="mt-5">
            {step.link ? (
              <ButtonLink {...step.link} variant="text">
                {step.link.label}
              </ButtonLink>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  )
}
