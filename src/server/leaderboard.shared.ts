const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/

export type LeaderboardFilters = {
  endDate: string
  startDate: string
}

export type LeaderboardEntry = {
  agent: string
  annualPremium: number
  rank: number
  submitted: number
}

export type LeaderboardState =
  | {
      entries: Array<LeaderboardEntry>
      filters: LeaderboardFilters
      status: 'success'
      updatedAt: string
    }
  | {
      entries: []
      error: string
      filters: LeaderboardFilters
      status: 'error' | 'missing_key'
      updatedAt: string
    }

type ScoreboardRecord = Record<string, unknown>

export function defaultLeaderboardFilters(
  today = new Date(),
): LeaderboardFilters {
  return {
    startDate: formatDate(getWeekStart(today)),
    endDate: formatDate(today),
  }
}

export function formatDisplayDate(value: string) {
  const [year, month, day] = value.split('-')

  return `${month}/${day}/${year}`
}

export function normalizeScoreboardPayload(
  payload: unknown,
): Array<LeaderboardEntry> {
  return getScoreboardRows(payload)
    .map((row, index) => ({
      agent:
        readString(row, ['agent_name', 'producer_name', 'name', 'agent']) ??
        'Unknown Producer',
      annualPremium: readNumber(row, [
        'annual_premium',
        'production',
        'premium',
        'volume',
        'score',
      ]),
      rank: readNumber(row, ['rank', 'position']) || index + 1,
      submitted: readNumber(row, [
        'submitted',
        'submissions',
        'application_count',
        'apps',
        'cases',
      ]),
    }))
    .sort((left, right) => left.rank - right.rank)
}

export function validateLeaderboardFilters(
  input: LeaderboardFilters,
): LeaderboardFilters {
  const fallback = defaultLeaderboardFilters()
  const startDate = DATE_PATTERN.test(input.startDate)
    ? input.startDate
    : fallback.startDate
  const endDate = DATE_PATTERN.test(input.endDate)
    ? input.endDate
    : fallback.endDate

  return { startDate, endDate }
}

function getScoreboardRows(payload: unknown): Array<ScoreboardRecord> {
  if (Array.isArray(payload)) {
    return payload.filter(isRecord)
  }

  if (!isRecord(payload)) {
    return []
  }

  const nested = ['results', 'data', 'items', 'scoreboard', 'leaderboard']
    .map((key) => payload[key])
    .find(Array.isArray)

  return nested?.filter(isRecord) ?? []
}

function readString(
  row: ScoreboardRecord,
  keys: Array<string>,
): string | undefined {
  for (const key of keys) {
    const value = row[key]
    if (typeof value === 'string' && value.trim()) {
      return value.trim()
    }

    if (isRecord(value)) {
      const nested = readString(value, ['name', 'full_name', 'display_name'])
      if (nested) {
        return nested
      }
    }
  }

  return undefined
}

function readNumber(row: ScoreboardRecord, keys: Array<string>) {
  for (const key of keys) {
    const value = row[key]
    if (typeof value === 'number' && Number.isFinite(value)) {
      return value
    }

    if (typeof value === 'string') {
      const parsed = Number(value.replace(/[$,]/g, ''))
      if (Number.isFinite(parsed)) {
        return parsed
      }
    }
  }

  return 0
}

function isRecord(value: unknown): value is ScoreboardRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function formatDate(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function getWeekStart(date: Date) {
  const start = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  const day = start.getDay()
  const daysSinceMonday = day === 0 ? 6 : day - 1
  start.setDate(start.getDate() - daysSinceMonday)

  return start
}
