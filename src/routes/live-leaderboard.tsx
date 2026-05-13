import { createFileRoute } from '@tanstack/react-router'
import { LiveLeaderboardClient } from '#/components/LiveLeaderboardClient'
import { PageBanner } from '#/components/PageBanner'
import { getLiveLeaderboard } from '#/server/leaderboard'

export const Route = createFileRoute('/live-leaderboard')({
  loader: () => getLiveLeaderboard(),
  component: LiveLeaderboard,
})

function LiveLeaderboard() {
  const initial = Route.useLoaderData()

  return (
    <>
      <PageBanner
        eyebrow="Live Leaderboard"
        title={
          <>
            Track the producers
            <br />
            <em className="gradient-text">leading the agency.</em>
          </>
        }
      />
      <LiveLeaderboardClient initial={initial} />
    </>
  )
}
