import { Icon } from '#/components/Icon'
import { formatDisplayDate } from '#/server/leaderboard.shared'
import type { LeaderboardState } from '#/server/leaderboard.shared'
import type { IconName } from '#/components/Icon'

type LeaderboardEntry = LeaderboardState['entries'][number]

const TOP_ENTRY_LIMIT = 10

const AVATAR_STYLES = [
  'border-ink/15 bg-ink text-paper',
  'border-copper/25 bg-copper text-paper',
  'border-ink/15 bg-ink text-paper',
  'border-copper/25 bg-copper text-paper',
  'border-ink/15 bg-ink text-paper',
  'border-copper/25 bg-copper text-paper',
] as const

export function LiveLeaderboardClient({
  initial,
}: {
  initial: LeaderboardState
}) {
  return (
    <section className="leaderboard-page min-h-screen bg-paper px-4 pb-16 pt-28 text-ink sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
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
  const [topEntry, ...remainingEntries] = entries

  return (
    <div>
      <LeaderboardIntro
        filters={state.filters}
        producerCount={state.entries.length}
        totalPremium={totalPremium}
        totalSubmitted={totalSubmitted}
      />
      {state.status === 'success' ? (
        topEntry ? (
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
      <p className="mt-8 text-right text-[11px] font-bold uppercase leading-none tracking-[.28em] text-ink/58">
        Last updated: {formatUpdatedAt(state.updatedAt)}
      </p>
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
          className="absolute -right-5 top-0 hidden size-44 rounded-full border border-copper/12 text-center font-display text-[6rem] leading-[1.6] text-copper/10 lg:block"
        >
          JG
        </div>
        <p className="font-display text-[4rem] font-light italic leading-none text-copper-strong sm:text-[5.25rem]">
          Live
        </p>
        <h1 className="-mt-2 font-display text-[4.7rem] font-light leading-[.9] text-ink sm:text-[6.5rem]">
          Leaderboard
        </h1>
        <div className="mt-7 h-px w-16 bg-copper" />
        <p className="mt-5 max-w-md text-[11px] font-bold uppercase leading-6 tracking-[.34em] text-ink/72">
          Recognizing today&apos;s top producers building tomorrow&apos;s
          legacy.
        </p>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[.22em] text-copper-strong">
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
    <article className="border-copper/22 flex items-center gap-4 border-l px-4 py-3 first:border-l-0 first:pl-0 max-sm:border-l-0 max-sm:border-t max-sm:first:border-t-0 max-sm:first:pt-0">
      <div className="grid size-14 shrink-0 place-items-center rounded-full border border-copper/20 bg-parchment text-ink shadow-[inset_0_0_0_8px_rgba(111,67,38,0.035)]">
        <Icon name={icon} size={24} strokeWidth={1.75} />
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase leading-none tracking-[.22em] text-ink/78">
          {label}
        </p>
        <p className="mt-2 font-display text-5xl font-light leading-none text-ink tabular-nums">
          {value}
        </p>
        <p className="mt-2 text-[10px] font-bold uppercase leading-none tracking-[.24em] text-copper-strong">
          {detail}
        </p>
      </div>
    </article>
  )
}

function TopProducerFeature({ entry }: { entry: LeaderboardEntry }) {
  return (
    <article className="relative min-h-[34rem] overflow-hidden border border-copper/26 bg-ink p-5 text-paper shadow-[0_30px_80px_rgba(25,38,57,0.14)] sm:p-7 lg:p-9">
      <div className="leaderboard-peak" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute right-14 top-14 hidden rounded-full border border-copper/18 px-6 py-4 font-display text-5xl text-copper/20 xl:block"
      >
        JG
      </div>
      <div className="relative grid gap-8 md:grid-cols-[.65fr_1fr] md:items-center">
        <div className="border-b border-copper/45 pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-8">
          <p className="text-xs font-bold uppercase tracking-[.28em] text-copper-light">
            Rank
          </p>
          <p className="mt-4 font-display text-[8rem] font-light leading-none text-copper-light sm:text-[10rem]">
            {formatRank(entry.rank)}
          </p>
        </div>
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-copper-light">
            Top Producer
          </p>
          <h2 className="mt-5 truncate font-display text-[4.25rem] font-light leading-none text-paper sm:text-[5.5rem]">
            {entry.agent}
          </h2>
          <p className="mt-5 text-xs font-bold uppercase tracking-[.28em] text-paper/76">
            {formatSubmitted(entry.submitted)}
          </p>
          <div className="mt-9">
            <p className="text-xs font-bold uppercase tracking-[.24em] text-paper/76">
              Total Production
            </p>
            <p className="mt-3 font-display text-6xl font-light leading-none text-copper-light tabular-nums">
              {formatCurrency(entry.annualPremium)}
            </p>
          </div>
        </div>
      </div>
      <div className="relative mt-10 border-t border-paper/12 pt-7 sm:mt-16">
        <p className="font-display text-4xl text-copper-light">&ldquo;</p>
        <p className="max-w-xl font-display text-2xl leading-snug text-paper sm:text-3xl">
          Great producers do not chase success. They build it one client, one
          deal at a time.
        </p>
        <p className="mt-8 text-[11px] font-bold uppercase tracking-[.26em] text-paper/66">
          JG Financial
        </p>
      </div>
    </article>
  )
}

function LeaderboardList({ entries }: { entries: Array<LeaderboardEntry> }) {
  if (!entries.length) {
    return (
      <div className="grid min-h-[18rem] place-items-center border border-copper/22 bg-parchment p-8 text-center">
        <p className="max-w-sm font-display text-3xl leading-tight text-ink">
          More ranked producers will appear as submissions come in.
        </p>
      </div>
    )
  }

  return (
    <div className="border border-copper/22 bg-paper shadow-[0_24px_70px_rgba(111,67,38,0.08)]">
      <div className="divide-y divide-copper/18">
        {entries.map((entry) => (
          <LeaderboardRow entry={entry} key={`${entry.rank}-${entry.agent}`} />
        ))}
      </div>
    </div>
  )
}

function EmptyLeaderboard() {
  return (
    <div className="mt-8 border border-copper/22 bg-parchment p-10 text-center">
      <p className="font-display text-4xl text-ink">
        No leaderboard rows for this week.
      </p>
    </div>
  )
}

function LeaderboardError({ message }: { message: string }) {
  return (
    <div className="mt-8 border border-copper/22 bg-parchment p-8 text-ink shadow-[0_24px_70px_rgba(111,67,38,0.08)]">
      <p className="text-xs font-bold uppercase tracking-[.28em] text-copper-strong">
        Leaderboard unavailable
      </p>
      <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-ink/76">
        {message}
      </p>
    </div>
  )
}

function LeaderboardRow({ entry }: { entry: LeaderboardEntry }) {
  return (
    <article className="grid min-h-[5rem] grid-cols-[3.25rem_3rem_minmax(0,1fr)] items-center gap-x-3 px-4 py-3 text-ink sm:grid-cols-[4.5rem_3.25rem_minmax(0,1fr)_minmax(7rem,max-content)] sm:gap-x-5 sm:px-7 sm:py-4">
      <RankBadge rank={entry.rank} />
      <ProducerAvatar agent={entry.agent} rank={entry.rank} />
      <div className="min-w-0">
        <h3 className="truncate font-display text-2xl font-semibold leading-tight text-ink sm:text-[1.65rem]">
          {entry.agent}
        </h3>
        <p className="mt-1 text-[10px] font-bold uppercase leading-none tracking-[.2em] text-ink/62">
          {formatSubmitted(entry.submitted)}
        </p>
      </div>
      <p className="col-start-3 justify-self-start border-t border-copper/50 pt-2 font-display text-2xl font-light leading-none text-ink tabular-nums sm:col-auto sm:justify-self-end sm:border-t-0 sm:border-l sm:pl-8 sm:text-right sm:text-3xl">
        {formatCurrency(entry.annualPremium)}
      </p>
    </article>
  )
}

function RankBadge({ rank }: { rank: number }) {
  return (
    <p className="justify-self-center font-display text-3xl font-semibold leading-none text-ink tabular-nums sm:text-4xl">
      {formatRank(rank)}
    </p>
  )
}

function ProducerAvatar({ agent, rank }: { agent: string; rank: number }) {
  const style = getAvatarStyle(rank)

  return (
    <div
      aria-hidden="true"
      className={`grid size-11 place-items-center rounded-full border text-lg font-bold shadow-[0_10px_24px_rgba(25,38,57,0.12)] sm:size-12 ${style}`}
    >
      {getInitial(agent)}
    </div>
  )
}

function getAvatarStyle(rank: number) {
  const index = Math.max(0, Math.trunc(rank) - 1) % AVATAR_STYLES.length

  return AVATAR_STYLES[index]
}

function getInitial(value: string) {
  return value.trim().charAt(0).toUpperCase() || '?'
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

function formatUpdatedAt(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    month: 'short',
    timeZone: 'UTC',
    timeZoneName: 'short',
    year: 'numeric',
  }).format(new Date(value))
}
