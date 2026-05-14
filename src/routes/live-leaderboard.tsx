import { createFileRoute } from '@tanstack/react-router'
import { LiveLeaderboardClient } from '#/components/LiveLeaderboardClient'
import { getLiveLeaderboard } from '#/server/leaderboard'

export const Route = createFileRoute('/live-leaderboard')({
  loader: () => getLiveLeaderboard(),
  component: LiveLeaderboard,
})

function LiveLeaderboard() {
  const initial = Route.useLoaderData()

  return <LiveLeaderboardClient initial={initial} />
}
