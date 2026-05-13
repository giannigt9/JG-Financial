import { createServerFn } from '@tanstack/react-start'
import { setResponseHeader } from '@tanstack/react-start/server'
import {
  defaultLeaderboardFilters,
  normalizeScoreboardPayload,
} from './leaderboard.shared'
import type { LeaderboardState } from './leaderboard.shared'

const SCOREBOARD_URL = 'https://api.useagentspace.com/api/v1/scoreboard/'

export const getLiveLeaderboard = createServerFn({ method: 'GET' }).handler(
  async () => fetchLiveLeaderboard(),
)

async function fetchLiveLeaderboard(): Promise<LeaderboardState> {
  noStore()

  const filters = defaultLeaderboardFilters()
  const apiKey = process.env.AGENTSPACE_API_KEY
  if (!apiKey) {
    return errorState(
      filters,
      'missing_key',
      'AgentSpace API key is not configured.',
    )
  }

  const url = new URL(SCOREBOARD_URL)
  url.searchParams.set('start_date', filters.startDate)
  url.searchParams.set('end_date', filters.endDate)
  url.searchParams.set('kind', 'producer')
  url.searchParams.set('scope', 'agency')
  url.searchParams.set('date_mode', 'submission_date')
  url.searchParams.set('production_basis', 'agentspace')

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: 'application/json',
      },
    })

    if (!response.ok) {
      return errorState(
        filters,
        'error',
        `AgentSpace returned ${response.status}. Check the API key and date range.`,
      )
    }

    const payload = (await response.json()) as unknown

    return {
      entries: normalizeScoreboardPayload(payload),
      filters,
      status: 'success',
      updatedAt: new Date().toISOString(),
    }
  } catch {
    return errorState(
      filters,
      'error',
      'Unable to reach AgentSpace right now. Try again in a few minutes.',
    )
  }
}

function errorState(
  filters: ReturnType<typeof defaultLeaderboardFilters>,
  status: 'error' | 'missing_key',
  error: string,
): LeaderboardState {
  return {
    entries: [],
    error,
    filters,
    status,
    updatedAt: new Date().toISOString(),
  }
}

function noStore() {
  setResponseHeader('cache-control', 'no-store')
}
