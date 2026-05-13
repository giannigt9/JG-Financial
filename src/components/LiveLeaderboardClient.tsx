import { useState } from 'react'
import { Icon } from '#/components/Icon'
import { getLiveLeaderboard } from '#/server/leaderboard'
import type {
  LeaderboardFilters,
  LeaderboardState,
} from '#/server/leaderboard.shared'

export function LiveLeaderboardClient({
  initial,
}: {
  initial: LeaderboardState
}) {
  const [filters, setFilters] = useState<LeaderboardFilters>(initial.filters)
  const [state, setState] = useState(initial)
  const [pending, setPending] = useState(false)

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (filters.startDate > filters.endDate) {
      setState({
        entries: [],
        error: 'Start date must be before end date.',
        filters,
        status: 'error',
        updatedAt: new Date().toISOString(),
      })
      return
    }

    setPending(true)
    try {
      setState(await getLiveLeaderboard({ data: filters }))
    } finally {
      setPending(false)
    }
  }

  return (
    <section className="section-pad bg-navy">
      <div className="content-shell">
        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
          <aside className="border border-blue-line bg-gradient-to-br from-navy-2 to-navy p-6 lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-3 text-blue-glow">
              <Icon name="calendar" size={20} />
              <p className="text-xs font-bold uppercase tracking-[.22em]">
                Submission Date
              </p>
            </div>
            <form className="mt-7 space-y-5" onSubmit={submit}>
              <DateField
                label="Start date"
                name="startDate"
                onChange={(value) =>
                  setFilters((current) => ({ ...current, startDate: value }))
                }
                value={filters.startDate}
              />
              <DateField
                label="End date"
                name="endDate"
                onChange={(value) =>
                  setFilters((current) => ({ ...current, endDate: value }))
                }
                value={filters.endDate}
              />
              <button
                aria-busy={pending}
                className="min-h-12 w-full border border-blue-bright bg-blue-bright px-5 py-3 text-xs font-bold uppercase tracking-[.18em] text-white transition hover:bg-blue-glow hover:text-navy disabled:cursor-wait disabled:opacity-60"
                disabled={pending}
                type="submit"
              >
                {pending ? 'Loading' : 'Apply Filter'}
              </button>
            </form>
            <p className="mt-5 text-xs leading-6 text-white/52">
              Leaderboard requests use AgentSpace production basis and
              submission-date mode.
            </p>
          </aside>

          <div>
            <LeaderboardSummary state={state} />
            <LeaderboardTable entries={state.entries} />
          </div>
        </div>
      </div>
    </section>
  )
}

function DateField({
  label,
  name,
  onChange,
  value,
}: {
  label: string
  name: keyof LeaderboardFilters
  onChange: (value: string) => void
  value: string
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-bold uppercase tracking-[.18em] text-white/58">
        {label}
      </span>
      <input
        className="mt-2 min-h-12 w-full border border-blue-line bg-white/5 px-4 text-white outline-none transition focus:border-blue-bright"
        name={name}
        onChange={(event) => onChange(event.target.value)}
        type="date"
        value={value}
      />
    </label>
  )
}

function LeaderboardSummary({ state }: { state: LeaderboardState }) {
  const totalPremium = state.entries.reduce(
    (total, entry) => total + entry.annualPremium,
    0,
  )
  const totalSubmitted = state.entries.reduce(
    (total, entry) => total + entry.submitted,
    0,
  )

  return (
    <div className="mb-6 border border-blue-line bg-gradient-to-br from-navy-2 to-navy p-6">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div>
          <p className="eyebrow">Live Results</p>
          <h2 className="mt-3 font-display text-4xl text-white">
            {state.filters.startDate} to {state.filters.endDate}
          </h2>
        </div>
        <p className="border border-blue-line px-3 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-blue-glow">
          {state.status === 'success' ? 'Connected' : 'Needs Attention'}
        </p>
      </div>

      {state.status === 'success' ? (
        <div className="mt-6 grid border border-blue-line bg-blue-line md:grid-cols-3">
          <SummaryMetric
            label="Producers"
            value={String(state.entries.length)}
          />
          <SummaryMetric label="Submitted" value={String(totalSubmitted)} />
          <SummaryMetric
            label="Production"
            value={formatCurrency(totalPremium)}
          />
        </div>
      ) : (
        <p className="mt-5 border border-blue-line bg-blue-bright/10 p-4 text-sm leading-7 text-blue-pale">
          {state.error}
        </p>
      )}
    </div>
  )
}

function SummaryMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-navy p-5">
      <p className="font-display text-3xl text-blue-glow">{value}</p>
      <p className="mt-1 text-[10px] font-bold uppercase tracking-[.16em] text-white/45">
        {label}
      </p>
    </div>
  )
}

function LeaderboardTable({
  entries,
}: {
  entries: Array<LeaderboardState['entries'][number]>
}) {
  if (!entries.length) {
    return (
      <div className="border border-blue-line bg-navy-2 p-10 text-center">
        <Icon className="mx-auto text-blue-glow" name="trophy" size={38} />
        <p className="mt-5 font-display text-3xl text-white">
          No leaderboard rows for this filter.
        </p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden border border-blue-line">
      <div className="hidden grid-cols-[90px_1fr_170px_150px] bg-blue-900/40 px-5 py-4 text-[10px] font-bold uppercase tracking-[.16em] text-blue-glow md:grid">
        <span>Rank</span>
        <span>Producer</span>
        <span className="text-right">Production</span>
        <span className="text-right">Submitted</span>
      </div>
      <div className="divide-y divide-blue-line">
        {entries.map((entry) => (
          <article
            className="grid gap-4 bg-navy p-5 md:grid-cols-[90px_1fr_170px_150px] md:items-center"
            key={`${entry.rank}-${entry.agent}`}
          >
            <p className="font-display text-4xl italic text-blue-glow">
              #{entry.rank}
            </p>
            <div>
              <h3 className="font-display text-3xl text-white">
                {entry.agent}
              </h3>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[.16em] text-white/42 md:hidden">
                Production · Submitted
              </p>
            </div>
            <p className="font-display text-2xl text-white md:text-right">
              {formatCurrency(entry.annualPremium)}
            </p>
            <p className="text-sm font-bold text-blue-pale md:text-right">
              {entry.submitted}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    currency: 'USD',
    maximumFractionDigits: 0,
    style: 'currency',
  }).format(value)
}
