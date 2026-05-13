import { Target } from 'lucide-react'
import { SectionHeading } from '#/components/SectionHeading'
import type { compensationFormula, mathRows } from '#/content/site'

type MathRow = (typeof mathRows)[number]

export function MathSection({
  formula,
  rows,
}: {
  formula: typeof compensationFormula
  rows: Array<MathRow>
}) {
  const [start, ...rest] = formula
  const result = rest.pop()

  return (
    <section className="section-pad bg-navy-2">
      <div className="content-shell">
        <SectionHeading
          eyebrow="The Numbers"
          title="Your first $10K month."
          accent="$10K month."
          intro="Real math. Real activity. Real results. Here is exactly what it takes, broken down to the dial."
        />
        <div className="mt-16 grid border border-blue-line bg-blue-line md:grid-cols-2">
          {rows.map((row) => (
            <article className="flex items-center gap-5 bg-navy p-7" key={row.label}>
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
            {start}{' '}
            {rest.map((item) => (
              <span key={item}>
                × <span className="text-blue-glow">{item}</span>{' '}
              </span>
            ))}
            = {result}
          </p>
        </div>
      </div>
    </section>
  )
}
