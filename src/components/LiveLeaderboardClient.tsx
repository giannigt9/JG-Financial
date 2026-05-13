import type { LeaderboardState } from '#/server/leaderboard.shared'

type LeaderboardEntry = LeaderboardState['entries'][number]

const AVATAR_TONES = [
  'bg-[#ff6a2a]',
  'bg-[#80675d]',
  'bg-[#1f6819]',
  'bg-[#008d80]',
  'bg-[#2f80ed]',
  'bg-[#19bdb5]',
  'bg-[#8a4f3d]',
] as const

export function LiveLeaderboardClient({
  initial,
}: {
  initial: LeaderboardState
}) {
  return (
    <section className="section-pad bg-navy">
      <div className="content-shell">
        <LeaderboardPanel state={initial} />
      </div>
    </section>
  )
}

function LeaderboardPanel({ state }: { state: LeaderboardState }) {
  const totalPremium = state.entries.reduce(
    (total, entry) => total + entry.annualPremium,
    0,
  )
  const totalSubmitted = state.entries.reduce(
    (total, entry) => total + entry.submitted,
    0,
  )

  return (
    <div>
      <div className="mb-6">
        <LeaderboardMetrics
          producerCount={state.entries.length}
          totalPremium={totalPremium}
          totalSubmitted={totalSubmitted}
        />
      </div>

      {state.status === 'success' ? (
        <LeaderboardList entries={state.entries} />
      ) : (
        <p className="border border-blue-line bg-blue-bright/10 p-4 text-sm leading-7 text-blue-pale">
          {state.error}
        </p>
      )}
    </div>
  )
}

function LeaderboardMetrics({
  producerCount,
  totalPremium,
  totalSubmitted,
}: {
  producerCount: number
  totalPremium: number
  totalSubmitted: number
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <SummaryPill label="Producers" value={String(producerCount)} />
      <SummaryPill label="Deals Submitted" value={String(totalSubmitted)} />
      <SummaryPill
        label="Total Production"
        value={formatCurrency(totalPremium)}
      />
    </div>
  )
}

function SummaryPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-blue-line px-5 py-4">
      <p className="text-2xl font-extrabold text-white">{value}</p>
      <p className="mt-2 text-[10px] font-bold uppercase tracking-[.16em] text-blue-pale/55">
        {label}
      </p>
    </div>
  )
}

function LeaderboardList({ entries }: { entries: Array<LeaderboardEntry> }) {
  if (!entries.length) {
    return (
      <div className="rounded-[28px] border border-blue-line bg-[#f7f9ff] p-10 text-center">
        <p className="font-display text-3xl text-[#081326]">
          No leaderboard rows for this week.
        </p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-[28px] border border-[#d7deee] bg-[#f7f9ff] shadow-[0_24px_80px_rgba(2,10,28,0.28)]">
      <div className="divide-y divide-[#dfe5f1]">
        {entries.map((entry) => (
          <LeaderboardRow entry={entry} key={`${entry.rank}-${entry.agent}`} />
        ))}
      </div>
    </div>
  )
}

function LeaderboardRow({ entry }: { entry: LeaderboardEntry }) {
  return (
    <article className="grid min-h-24 grid-cols-[2.75rem_3.5rem_minmax(0,1fr)_auto] items-center gap-3 px-4 py-4 text-[#081326] sm:min-h-28 sm:grid-cols-[4.5rem_5.5rem_minmax(0,1fr)_max-content] sm:gap-4 sm:px-7 sm:py-5">
      <RankBadge rank={entry.rank} />
      <ProducerAvatar agent={entry.agent} rank={entry.rank} />
      <div className="min-w-0">
        <h3 className="text-base font-extrabold leading-tight text-[#050b19] sm:text-2xl">
          {entry.agent}
        </h3>
        <p className="mt-1 text-[10px] font-bold uppercase tracking-[.13em] text-[#6b7280] sm:text-xs">
          {entry.submitted} submitted
        </p>
      </div>
      <p className="justify-self-end text-right text-base font-semibold text-[#5f6470] sm:text-2xl">
        {formatCurrency(entry.annualPremium)}
      </p>
    </article>
  )
}

function RankBadge({ rank }: { rank: number }) {
  if (rank > 3) {
    return (
      <p className="justify-self-center text-base font-extrabold text-[#39b54a] sm:text-xl">
        {rank}
      </p>
    )
  }

  const medalClass =
    rank === 1
      ? 'border-[#f5c22c] bg-[#ffd33d] text-[#9b6700] shadow-[inset_0_0_0_5px_rgba(255,184,0,0.35)]'
      : rank === 2
        ? 'border-[#c5d3e8] bg-[#dce8f7] text-[#6f87a4] shadow-[inset_0_0_0_5px_rgba(156,181,210,0.35)]'
        : 'border-[#c77735] bg-[#d98a45] text-[#8d4e20] shadow-[inset_0_0_0_5px_rgba(161,91,35,0.28)]'

  return (
    <p
      className={`grid size-9 place-items-center justify-self-center rounded-full border-4 text-base font-extrabold sm:size-12 sm:text-xl ${medalClass}`}
    >
      {rank}
    </p>
  )
}

function ProducerAvatar({ agent, rank }: { agent: string; rank: number }) {
  const tone = AVATAR_TONES[(rank - 1) % AVATAR_TONES.length]

  return (
    <div
      aria-hidden="true"
      className={`grid size-12 place-items-center rounded-full text-xl font-bold text-white shadow-[inset_0_-10px_20px_rgba(0,0,0,0.14)] sm:size-16 sm:text-3xl ${tone}`}
    >
      {getInitial(agent)}
    </div>
  )
}

function getInitial(value: string) {
  return value.trim().charAt(0).toUpperCase() || '?'
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    currency: 'USD',
    maximumFractionDigits: 0,
    style: 'currency',
  }).format(value)
}
