import { SectionHeading } from '#/components/SectionHeading'
import type { ScheduleDay } from '#/content/types'

export function ScheduleGrid({ days }: { days: Array<ScheduleDay> }) {
  return (
    <section className="section-pad bg-navy">
      <div className="content-shell max-w-[1500px]">
        <SectionHeading
          eyebrow="The Daily Grind"
          title="JG Financial Agency Schedule"
          accent="Agency Schedule"
          intro="All times are Eastern Standard Time. This is the rhythm built by producers who hit the numbers."
        />
        <div className="mt-16 grid border border-blue-line bg-blue-line md:grid-cols-2 xl:grid-cols-7">
          {days.map((day) => (
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
  )
}
