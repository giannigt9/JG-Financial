import type { FaqItem } from '#/content/types'

export function FaqList({ items }: { items: Array<FaqItem> }) {
  return (
    <div className="space-y-4">
      {items.map((faq) => (
        <details className="group border border-blue-line bg-navy p-6" key={faq.question}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-2xl text-white">
            {faq.question}
            <span className="text-blue-bright transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-5 text-sm leading-8 text-white/62">{faq.answer}</p>
        </details>
      ))}
    </div>
  )
}
