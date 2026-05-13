import { createFileRoute } from '@tanstack/react-router'
import { ContactBand } from '#/components/ContactBand'
import { PageBanner } from '#/components/PageBanner'
import { FaqList } from '#/components/sections/FaqList'
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
          <FaqList items={faqs} />
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
