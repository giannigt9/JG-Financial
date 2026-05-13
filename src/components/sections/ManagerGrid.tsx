import type { managers } from '#/content/site'

type Manager = (typeof managers)[number]

export function ManagerGrid({ items }: { items: Array<Manager> }) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {items.map((manager) => (
        <article
          className="overflow-hidden border border-blue-line bg-gradient-to-b from-navy-2 to-navy"
          key={manager.name}
        >
          <div className="grid aspect-square place-items-center border-b-2 border-blue-bright bg-[radial-gradient(circle_at_30%_25%,rgba(123,168,255,.2),transparent_52%),linear-gradient(135deg,#122c63,#061536)]">
            <div className="text-center">
              <p className="gradient-text font-display text-7xl italic">
                {manager.initials}
              </p>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[.25em] text-white/32">
                Add Photo
              </p>
            </div>
          </div>
          <div className="p-7">
            <h2 className="font-display text-3xl text-white">{manager.name}</h2>
            <p className="mt-1 text-xs font-bold uppercase tracking-[.18em] text-blue-glow">
              {manager.title}
            </p>
            <p className="mt-5 text-sm leading-7 text-white/60">
              {manager.bio}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}
