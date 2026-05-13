import type { CostRow } from '#/content/types'

export function CostSummary({ rows }: { rows: Array<CostRow> }) {
  return (
    <div className="mt-14 overflow-hidden border border-blue-line bg-gradient-to-br from-navy to-navy-2">
      <h2 className="bg-blue-900/40 p-6 font-display text-3xl text-white">
        Onboarding <em className="text-blue-glow">Cost Summary</em>
      </h2>
      {rows.map((row) => (
        <div
          className="flex justify-between gap-4 border-t border-blue-line px-6 py-4 text-sm"
          key={row.label}
        >
          <span className="text-white/60">{row.label}</span>
          <strong className="text-right text-white">{row.value}</strong>
        </div>
      ))}
    </div>
  )
}
