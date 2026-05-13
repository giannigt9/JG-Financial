import { createFileRoute } from '@tanstack/react-router'
import { ContactBand } from '#/components/ContactBand'
import { PageBanner } from '#/components/PageBanner'
import { contact, faqs } from '#/content/site'

export const Route = createFileRoute('/faq')({ component: Faq })

function Faq() {
  return (
    <>
      <PageBanner
        eyebrow="Frequently Asked"
        title={
          <>
            Answers to the
            <br />
            <em className="gradient-text">questions we get most.</em>
          </>
        }
      />
      <section className="section-pad bg-navy-2">
        <div className="content-shell max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                className="group border border-blue-line bg-navy p-6"
                key={faq.question}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-2xl text-white">
                  {faq.question}
                  <span className="text-blue-bright transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 text-sm leading-8 text-white/62">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <ContactBand
        detail="Email Julian directly and we will walk through anything."
        primary={{ label: 'Email Julian', href: `mailto:${contact.email}` }}
        title="Still have questions?"
      />
    </>
  )
}
