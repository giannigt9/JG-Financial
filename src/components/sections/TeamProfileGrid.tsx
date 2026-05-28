import type { TeamProfile } from '#/content/types'

export function TeamProfileGrid({ items }: { items: Array<TeamProfile> }) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {items.map((profile) => (
        <article
          className="overflow-hidden border border-blue-line bg-gradient-to-b from-navy-2 to-navy"
          key={profile.id}
        >
          <div className="aspect-square overflow-hidden border-b-2 border-blue-bright bg-navy-2">
            <img
              alt={`${profile.name} profile photo`}
              className="h-full w-full object-cover"
              decoding="async"
              src={profile.photo.src}
              style={{ objectPosition: profile.photo.position }}
            />
          </div>
          <div className="p-7">
            <h2 className="font-display text-3xl text-white">{profile.name}</h2>
            <p className="mt-1 text-xs font-bold uppercase tracking-[.18em] text-blue-glow">
              {profile.title}
            </p>
            <p className="mt-5 text-sm leading-7 text-white/60">
              {profile.bio}
            </p>
            {profile.highlights.length > 0 ? (
              <ul className="mt-6 space-y-2 text-sm leading-6 text-white/70">
                {profile.highlights.map((highlight) => (
                  <li className="flex gap-3" key={highlight}>
                    <span
                      aria-hidden="true"
                      className="mt-[.7em] h-1.5 w-1.5 shrink-0 bg-blue-glow"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  )
}
