type StatGridItem = {
  label: string
  value: string
}

export function StatGrid({
  columns = 'xl:grid-cols-5',
  items,
}: {
  columns?: string
  items: Array<StatGridItem>
}) {
  return (
    <div className={`grid overflow-hidden border border-blue-line bg-blue-line md:grid-cols-2 ${columns}`}>
      {items.map((item) => (
        <article className="bg-navy p-8 text-center" key={`${item.value}-${item.label}`}>
          <p className="gradient-text font-display text-6xl font-semibold">
            {item.value}
          </p>
          <p className="mt-4 text-sm leading-7 text-white/62">{item.label}</p>
        </article>
      ))}
    </div>
  )
}
