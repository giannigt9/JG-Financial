import { Icon } from '#/components/Icon'

export function VideoFeature() {
  return (
    <div className="border border-blue-line bg-gradient-to-br from-navy-2 to-navy p-4 shadow-2xl shadow-black/40">
      <div className="aspect-video bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,.22),transparent_68%),linear-gradient(135deg,#0a1f4d,#122c63)]">
        <div className="grid h-full place-items-center p-8 text-center">
          <div>
            <div className="mx-auto grid size-24 place-items-center rounded-full border border-blue-line bg-blue-bright/10 text-blue-glow">
              <Icon fill="currentColor" name="play" size={34} />
            </div>
            <p className="mt-6 font-display text-3xl italic text-white">
              Industry Breakdown
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[.22em] text-white/42">
              Loom embed ready
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
