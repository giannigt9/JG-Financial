import { Icon } from '#/components/Icon'
import { formatDisplayDate } from '#/server/leaderboard.shared'
import type { LeaderboardState } from '#/server/leaderboard.shared'
import type { IconName } from '#/components/Icon'

type LeaderboardEntry = LeaderboardState['entries'][number]

const TOP_ENTRY_LIMIT = 10

export function LiveLeaderboardClient({
  initial,
}: {
  initial: LeaderboardState
}) {
  return (
    <section className="leaderboard-page min-h-screen bg-navy px-4 pb-16 pt-28 text-blue-pale sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
      <div className="mx-auto w-full max-w-[1420px]">
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
  const entries = state.entries.slice(0, TOP_ENTRY_LIMIT)
  const topEntry = entries[0]
  const remainingEntries = entries.slice(1)

  return (
    <div>
      <LeaderboardIntro
        filters={state.filters}
        producerCount={state.entries.length}
        totalPremium={totalPremium}
        totalSubmitted={totalSubmitted}
      />
      {state.status === 'success' ? (
        entries.length ? (
          <div className="mt-8 grid gap-4 xl:grid-cols-[1.05fr_.95fr] xl:items-stretch">
            <TopProducerFeature entry={topEntry} />
            <LeaderboardList entries={remainingEntries} />
          </div>
        ) : (
          <EmptyLeaderboard />
        )
      ) : (
        <LeaderboardError message={state.error} />
      )}
    </div>
  )
}

function LeaderboardIntro({
  filters,
  producerCount,
  totalPremium,
  totalSubmitted,
}: {
  filters: LeaderboardState['filters']
  producerCount: number
  totalPremium: number
  totalSubmitted: number
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,.82fr)_minmax(0,1fr)] lg:items-end">
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute -right-5 top-0 hidden size-44 rounded-full border border-blue-line text-center font-display text-[6rem] leading-[1.6] text-blue-glow/10 lg:block"
        >
          JG
        </div>
        <p className="font-display text-[4rem] font-light italic leading-none text-blue-glow sm:text-[5.25rem]">
          Live
        </p>
        <h1 className="-mt-2 font-display text-[4.7rem] font-light leading-[.9] text-blue-pale sm:text-[6.5rem]">
          Leaderboard
        </h1>
        <div className="mt-7 h-px w-16 bg-blue-bright" />
        <p className="mt-5 max-w-md text-[11px] font-bold uppercase leading-6 tracking-[.34em] text-blue-pale/72">
          Recognizing today&apos;s top producers building tomorrow&apos;s
          legacy.
        </p>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[.22em] text-blue-glow">
          {formatDisplayDate(filters.startDate)} to{' '}
          {formatDisplayDate(filters.endDate)}
        </p>
      </div>
      <LeaderboardMetrics
        producerCount={producerCount}
        totalPremium={totalPremium}
        totalSubmitted={totalSubmitted}
      />
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
    <div className="grid gap-4 sm:grid-cols-3">
      <MetricItem
        detail="Active"
        icon="users"
        label="Producers"
        value={String(producerCount)}
      />
      <MetricItem
        detail="This week"
        icon="wallet"
        label="Deals Submitted"
        value={String(totalSubmitted)}
      />
      <MetricItem
        detail="This week"
        icon="analytics"
        label="Total Production"
        value={formatCurrency(totalPremium)}
      />
    </div>
  )
}

function MetricItem({
  detail,
  icon,
  label,
  value,
}: {
  detail: string
  icon: IconName
  label: string
  value: string
}) {
  return (
    <article className="flex items-center gap-4 border-l border-blue-line px-4 py-3 first:border-l-0 first:pl-0 max-sm:border-l-0 max-sm:border-t max-sm:first:border-t-0 max-sm:first:pt-0">
      <div className="grid size-14 shrink-0 place-items-center rounded-full border border-blue-line bg-navy-2/40 text-blue-glow shadow-[inset_0_0_0_8px_rgba(123,168,255,0.035)]">
        <Icon name={icon} size={24} strokeWidth={1.75} />
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase leading-none tracking-[.22em] text-blue-pale/70">
          {label}
        </p>
        <p className="mt-2 font-display text-5xl font-light leading-none text-blue-pale tabular-nums">
          {value}
        </p>
        <p className="mt-2 text-[10px] font-bold uppercase leading-none tracking-[.24em] text-blue-glow">
          {detail}
        </p>
      </div>
    </article>
  )
}

function TopProducerFeature({ entry }: { entry: LeaderboardEntry }) {
  return (
    <article className="relative min-h-[34rem] overflow-hidden border border-blue-line bg-navy-2 p-5 text-blue-pale shadow-[0_30px_80px_rgba(1,8,28,0.28)] sm:p-7 lg:p-9">
      <div className="leaderboard-peak" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute right-14 top-14 hidden rounded-full border border-blue-line px-6 py-4 font-display text-5xl text-blue-glow/18 xl:block"
      >
        JG
      </div>
      <div className="relative grid gap-8 md:grid-cols-[.65fr_1fr] md:items-center">
        <div className="border-b border-blue-line pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-8">
          <p className="text-xs font-bold uppercase tracking-[.28em] text-blue-glow">
            Rank
          </p>
          <p className="mt-4 font-display text-[8rem] font-light leading-none text-blue-glow sm:text-[10rem]">
            {formatRank(entry.rank)}
          </p>
        </div>
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-blue-glow">
            Top Producer
          </p>
          <h2 className="mt-5 truncate font-display text-[4.25rem] font-light leading-none text-blue-pale sm:text-[5.5rem]">
            {entry.agent}
          </h2>
          <p className="mt-5 text-xs font-bold uppercase tracking-[.28em] text-blue-pale/72">
            {formatSubmitted(entry.submitted)}
          </p>
          <div className="mt-9">
            <p className="text-xs font-bold uppercase tracking-[.24em] text-blue-pale/72">
              Total Production
            </p>
            <p className="mt-3 font-display text-6xl font-light leading-none text-blue-glow tabular-nums">
              {formatCurrency(entry.annualPremium)}
            </p>
          </div>
        </div>
      </div>
      <div className="relative mt-10 border-t border-blue-line pt-7 sm:mt-16">
        <p className="font-display text-4xl text-blue-glow">&ldquo;</p>
        <p className="max-w-xl font-display text-2xl leading-snug text-blue-pale sm:text-3xl">
          Great producers do not chase success. They build it one client, one
          deal at a time.
        </p>
        <p className="mt-8 text-[11px] font-bold uppercase tracking-[.26em] text-blue-pale/62">
          JG Financial
        </p>
      </div>
    </article>
  )
}

function LeaderboardList({ entries }: { entries: Array<LeaderboardEntry> }) {
  if (!entries.length) {
    return (
      <div className="grid min-h-[18rem] place-items-center border border-blue-line bg-navy-2/20 p-8 text-center">
        <p className="max-w-sm font-display text-3xl leading-tight text-blue-pale">
          More ranked producers will appear as submissions come in.
        </p>
      </div>
    )
  }

  return (
    <div className="border border-blue-line bg-navy-2/15 shadow-[0_24px_80px_rgba(1,8,28,0.18)]">
      <div className="divide-y divide-blue-line">
        {entries.map((entry) => (
          <LeaderboardRow entry={entry} key={`${entry.rank}-${entry.agent}`} />
        ))}
      </div>
    </div>
  )
}

function EmptyLeaderboard() {
  return (
    <div className="mt-8 border border-blue-line bg-navy-2/20 p-10 text-center">
      <p className="font-display text-4xl text-blue-pale">
        No leaderboard rows for this week.
      </p>
    </div>
  )
}

function LeaderboardError({ message }: { message: string }) {
  return (
    <div className="mt-8 border border-blue-line bg-navy-2/20 p-8 text-blue-pale shadow-[0_24px_80px_rgba(1,8,28,0.18)]">
      <p className="text-xs font-bold uppercase tracking-[.28em] text-blue-glow">
        Leaderboard unavailable
      </p>
      <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-blue-pale/76">
        {message}
      </p>
    </div>
  )
}

function LeaderboardRow({ entry }: { entry: LeaderboardEntry }) {
  return (
    <article className="grid min-h-[5rem] grid-cols-[3.25rem_minmax(0,1fr)] items-center gap-x-3 px-4 py-3 text-blue-pale sm:grid-cols-[4.5rem_minmax(0,1fr)_minmax(7rem,max-content)] sm:gap-x-5 sm:px-7 sm:py-4">
      <RankBadge rank={entry.rank} />
      <div className="min-w-0">
        <h3 className="truncate font-display text-2xl font-semibold leading-tight text-blue-pale sm:text-[1.65rem]">
          {entry.agent}
        </h3>
        <p className="mt-1 text-[10px] font-bold uppercase leading-none tracking-[.2em] text-blue-pale/58">
          {formatSubmitted(entry.submitted)}
        </p>
      </div>
      <p className="col-start-2 justify-self-start border-t border-blue-line pt-2 font-display text-2xl font-light leading-none text-blue-pale/84 tabular-nums sm:col-auto sm:justify-self-end sm:border-t-0 sm:border-l sm:pl-8 sm:text-right sm:text-3xl">
        {formatCurrency(entry.annualPremium)}
      </p>
    </article>
  )
}

function RankBadge({ rank }: { rank: number }) {
  return (
    <p className="justify-self-center font-display text-3xl font-semibold leading-none text-blue-pale tabular-nums sm:text-4xl">
      {formatRank(rank)}
    </p>
  )
}

function formatRank(value: number) {
  return String(value).padStart(2, '0')
}

function formatSubmitted(value: number) {
  return `${value} deals submitted`
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    currency: 'USD',
    maximumFractionDigits: 0,
    style: 'currency',
  }).format(value)
}
