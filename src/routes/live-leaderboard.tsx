import { createFileRoute } from '@tanstack/react-router'
import { LiveLeaderboardClient } from '#/components/LiveLeaderboardClient'
import { PageBanner } from '#/components/PageBanner'
import { getLiveLeaderboard } from '#/server/leaderboard'
import { defaultLeaderboardFilters } from '#/server/leaderboard.shared'

export const Route = createFileRoute('/live-leaderboard')({
  loader: () => getLiveLeaderboard({ data: defaultLeaderboardFilters() }),
  component: LiveLeaderboard,
})

function LiveLeaderboard() {
  const initial = Route.useLoaderData()

  return (
    <>
      <PageBanner
        eyebrow="Live Leaderboard"
        intro="AgentSpace production rankings filtered by submission date."
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
