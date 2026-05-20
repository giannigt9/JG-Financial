import { useState } from 'react'
import { Icon } from '#/components/Icon'
import type { VideoFeatureContent } from '#/content/types'

export function VideoFeature({ video }: { video: VideoFeatureContent }) {
  const [embedLoaded, setEmbedLoaded] = useState(false)
  const handlePlay = () => {
    setEmbedLoaded(true)
  }

  return (
    <div className="border border-blue-line bg-gradient-to-br from-navy-2 to-navy p-4 shadow-2xl shadow-black/40">
      <div className="aspect-video overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,.22),transparent_68%),linear-gradient(135deg,#0a1f4d,#122c63)]">
        {video.kind === 'embed' && embedLoaded ? (
          <iframe
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
            src={video.embedUrl}
            title={video.title}
          />
        ) : video.kind === 'embed' ? (
          <button
            aria-label={`Play ${video.title}`}
            className="group relative isolate grid h-full w-full place-items-center overflow-hidden p-8 text-center"
            onClick={handlePlay}
            type="button"
          >
            <VideoPoster thumbnailUrl={video.thumbnailUrl} video={video} />
          </button>
        ) : (
          <div className="grid h-full place-items-center p-8 text-center">
            <VideoPoster status={video.status} video={video} />
          </div>
        )}
      </div>
      <p className="border-t border-blue-line px-2 pt-4 text-sm leading-7 text-white/58">
        {video.description}
      </p>
    </div>
  )
}

function VideoPoster({
  status,
  thumbnailUrl,
  video,
}: {
  status?: string
  thumbnailUrl?: string
  video: VideoFeatureContent
}) {
  return (
    <>
      {thumbnailUrl ? (
        <>
          <img
            alt=""
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            loading="eager"
            src={thumbnailUrl}
          />
          <div className="absolute inset-0 -z-10 bg-navy/35" />
        </>
      ) : null}
      <div>
        <p className="mb-6 text-xs font-bold uppercase tracking-[.34em] text-blue-glow">
          {video.eyebrow}
        </p>
        <div className="mx-auto grid size-24 place-items-center rounded-full border border-blue-line bg-navy/55 text-blue-glow shadow-2xl shadow-black/45 backdrop-blur-sm transition duration-200 group-hover:border-blue-glow group-hover:bg-blue-bright/25 group-hover:text-white">
          <Icon fill="currentColor" name="play" size={34} />
        </div>
        <p className="mt-6 font-display text-3xl italic text-white">
          {video.title}
        </p>
        {status ? (
          <p className="mt-2 text-xs font-bold uppercase tracking-[.22em] text-white/42">
            {status}
          </p>
        ) : null}
      </div>
    </>
  )
}
