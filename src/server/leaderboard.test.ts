import { describe, expect, test } from 'vitest'
import {
  defaultLeaderboardFilters,
  formatDisplayDate,
  normalizeScoreboardPayload,
} from './leaderboard.shared'

describe('leaderboard data contracts', () => {
  test('defaults to Monday week-to-date filters', () => {
    expect(defaultLeaderboardFilters(new Date('2026-05-13T12:00:00Z'))).toEqual(
      {
        startDate: '2026-05-11',
        endDate: '2026-05-13',
      },
    )
  })

  test('uses Monday for Sunday week-to-date filters', () => {
    expect(defaultLeaderboardFilters(new Date('2026-05-17T12:00:00Z'))).toEqual(
      {
        startDate: '2026-05-11',
        endDate: '2026-05-17',
      },
    )
  })

  test('formats display dates as MM/DD/YYYY', () => {
    expect(formatDisplayDate('2026-05-13')).toBe('05/13/2026')
  })

  test('normalizes common AgentSpace scoreboard payloads', () => {
    const entries = normalizeScoreboardPayload({
      results: [
        {
          agent_name: 'Julian Gaviria',
          annual_premium: '$12,500',
          rank: 2,
          submitted: '4',
        },
        {
          agent: { name: 'Top Producer' },
          production: 18000,
          position: 1,
          application_count: 6,
        },
      ],
    })

    expect(entries).toEqual([
      {
        agent: 'Top Producer',
        annualPremium: 18000,
        rank: 1,
        submitted: 6,
      },
      {
        agent: 'Julian Gaviria',
        annualPremium: 12500,
        rank: 2,
        submitted: 4,
      },
    ])
  })

  test('normalizes nested production totals', () => {
    expect(
      normalizeScoreboardPayload({
        results: [
          {
            name: 'Nested Producer',
            metrics: {
              production: {
                total_production: '$22,400',
              },
              submissions: {
                count: 8,
              },
            },
          },
        ],
      }),
    ).toEqual([
      {
        agent: 'Nested Producer',
        annualPremium: 22400,
        rank: 1,
        submitted: 8,
      },
    ])
  })
})
