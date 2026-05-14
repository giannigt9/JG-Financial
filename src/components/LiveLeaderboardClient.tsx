import type { LeaderboardState } from '#/server/leaderboard.shared'

type LeaderboardEntry = LeaderboardState['entries'][number]

const TOP_ENTRY_LIMIT = 10

const AVATAR_TONES = [
  'bg-[linear-gradient(145deg,#f28a34,#b84d2e)]',
  'bg-[linear-gradient(145deg,#9d8a79,#584a42)]',
  'bg-[linear-gradient(145deg,#3a8c2f,#1a541c)]',
  'bg-[linear-gradient(145deg,#55b9aa,#217469)]',
  'bg-[linear-gradient(145deg,#4f8df4,#2055bd)]',
  'bg-[linear-gradient(145deg,#64c9bf,#2c8f86)]',
  'bg-[linear-gradient(145deg,#b47458,#6e3f31)]',
] as const

const RANK_MEDAL_STYLES = {
  1: 'border-[#efc13d] bg-[linear-gradient(145deg,#ffe16a,#d29a12)] text-[#8c6108] shadow-[inset_0_0_0_5px_rgba(255,233,126,0.28),0_8px_18px_rgba(185,126,11,0.22)]',
  2: 'border-[#d2deed] bg-[linear-gradient(145deg,#eef5ff,#aabed4)] text-[#6c819a] shadow-[inset_0_0_0_5px_rgba(255,255,255,0.28),0_8px_18px_rgba(132,155,181,0.18)]',
  3: 'border-[#c98242] bg-[linear-gradient(145deg,#e39a55,#ad672c)] text-[#7d471e] shadow-[inset_0_0_0_5px_rgba(248,184,111,0.2),0_8px_18px_rgba(141,78,32,0.2)]',
} as const

type PodiumRank = keyof typeof RANK_MEDAL_STYLES

export function LiveLeaderboardClient({
  initial,
}: {
  initial: LeaderboardState
}) {
  return (
    <section className="min-h-screen bg-navy px-4 pb-20 pt-28 sm:px-8 lg:px-12 lg:pb-28 lg:pt-32">
      <div className="mx-auto w-full max-w-[1134px]">
        <h1 className="sr-only">Weekly Leaderboard</h1>
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
      <div className="mb-5">
        <LeaderboardMetrics
          producerCount={state.entries.length}
          totalPremium={totalPremium}
          totalSubmitted={totalSubmitted}
        />
      </div>

      {state.status === 'success' ? (
        <LeaderboardList entries={state.entries.slice(0, TOP_ENTRY_LIMIT)} />
      ) : (
        <p className="rounded-md border border-blue-line bg-blue-bright/10 p-5 text-sm leading-7 text-blue-pale">
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
    <div className="grid gap-4 sm:grid-cols-3 lg:gap-5">
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
    <div className="rounded-md border border-blue-line bg-navy-2/20 px-5 py-4 shadow-[inset_0_1px_0_rgba(221,230,255,0.04)] sm:px-6 sm:py-5">
      <p className="text-[11px] font-bold uppercase leading-none tracking-[.12em] text-blue-pale/58">
        {label}
      </p>
      <p className="mt-2 text-2xl font-extrabold leading-none text-blue-pale sm:text-[1.75rem]">
        {value}
      </p>
    </div>
  )
}

function LeaderboardList({ entries }: { entries: Array<LeaderboardEntry> }) {
  if (!entries.length) {
    return (
      <div className="rounded-md border border-blue-line bg-navy-2/20 p-10 text-center">
        <p className="font-display text-3xl text-blue-pale">
          No leaderboard rows for this week.
        </p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-md border border-blue-line bg-navy-2/15 shadow-[0_24px_80px_rgba(1,8,28,0.18)]">
      <div className="divide-y divide-blue-line">
        {entries.map((entry) => (
          <LeaderboardRow entry={entry} key={`${entry.rank}-${entry.agent}`} />
        ))}
      </div>
    </div>
  )
}

function LeaderboardRow({ entry }: { entry: LeaderboardEntry }) {
  return (
    <article className="grid min-h-[5.25rem] grid-cols-[2.25rem_3rem_minmax(0,1fr)] items-center gap-x-3 gap-y-1 px-4 py-3 text-blue-pale sm:min-h-[5.5rem] sm:grid-cols-[4.25rem_4.75rem_minmax(0,1fr)_max-content] sm:gap-x-4 sm:px-7 sm:py-4 lg:px-8">
      <RankBadge rank={entry.rank} />
      <ProducerAvatar agent={entry.agent} rank={entry.rank} />
      <div className="min-w-0">
        <h3 className="truncate text-base font-extrabold leading-tight text-blue-pale sm:text-[1.45rem]">
          {entry.agent}
        </h3>
        <p className="mt-1 text-[10px] font-bold uppercase leading-none tracking-[.12em] text-blue-pale/58 sm:text-xs">
          {formatSubmitted(entry.submitted)}
        </p>
      </div>
      <p className="col-start-3 justify-self-start text-base font-medium leading-none text-blue-pale/84 sm:col-auto sm:justify-self-end sm:text-right sm:text-[1.45rem]">
        {formatCurrency(entry.annualPremium)}
      </p>
    </article>
  )
}

function RankBadge({ rank }: { rank: number }) {
  if (!isPodiumRank(rank)) {
    return (
      <p className="justify-self-center text-base font-extrabold text-blue-pale sm:text-xl">
        {rank}
      </p>
    )
  }

  return (
    <p
      className={`grid size-9 place-items-center justify-self-center rounded-full border-[3px] text-sm font-extrabold sm:size-11 sm:text-base ${RANK_MEDAL_STYLES[rank]}`}
    >
      {rank}
    </p>
  )
}

function isPodiumRank(rank: number): rank is PodiumRank {
  return rank === 1 || rank === 2 || rank === 3
}

function ProducerAvatar({ agent, rank }: { agent: string; rank: number }) {
  const tone = getAvatarTone(rank)

  return (
    <div
      aria-hidden="true"
      className={`grid size-12 place-items-center rounded-full text-xl font-bold text-blue-pale shadow-[inset_0_-12px_20px_rgba(0,0,0,0.2),0_10px_24px_rgba(1,8,28,0.18)] sm:size-14 sm:text-2xl ${tone}`}
    >
      {getInitial(agent)}
    </div>
  )
}

function getAvatarTone(rank: number) {
  const index = Math.max(0, Math.trunc(rank) - 1) % AVATAR_TONES.length

  return AVATAR_TONES[index]
}

function getInitial(value: string) {
  return value.trim().charAt(0).toUpperCase() || '?'
}

function formatSubmitted(value: number) {
  return `${value} submitted`
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    currency: 'USD',
    maximumFractionDigits: 0,
    style: 'currency',
  }).format(value)
}
