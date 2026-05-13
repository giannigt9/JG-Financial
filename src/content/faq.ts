import { contact } from './contact'
import type { FaqItem } from './types'

export const faqs = [
  {
    question: 'What is JG Financial?',
    answer:
      'JG Financial is a national life insurance agency. We partner with top-rated carriers and provide agents with mentorship, training, contracts, and systems to build a real career.',
  },
  {
    question: 'Do I need experience to join?',
    answer:
      'No. We work with both licensed agents and people who have never sold insurance before.',
  },
  {
    question: 'Do I need a license to apply?',
    answer:
      'No. You can apply before you are licensed. If approved, the team walks you through pre-licensing, exam, application, and contracting.',
  },
  {
    question: 'How long does licensing take?',
    answer:
      'Most agents are licensed and contracted in 2-4 weeks. Motivated agents often move faster through the self-paced pre-licensing step.',
  },
  {
    question: 'How much does it cost to get started?',
    answer:
      'Roughly $230-$330 total: pre-licensing, state exam, state licensing fee, and E&O insurance.',
  },
  {
    question: 'What carriers do you work with?',
    answer:
      'Carrier groups include UIG, Supreme, Ethos, and Heartland. Specific carriers and contracting links are available in the agent portal.',
  },
  {
    question: 'How do agents get paid?',
    answer:
      'Agents are paid commission directly by carriers. There is no salary and no income cap.',
  },
  {
    question: 'Is this remote or in-person?',
    answer:
      'Agents can work virtually or in person depending on their market and appointment strategy.',
  },
  {
    question: 'What training and support do you offer?',
    answer:
      'Direct mentorship, group training, scripts, presentations, CRM and dialer systems, lead sources, and back-office support.',
  },
  {
    question: 'How do I apply?',
    answer: `Reach out to Julian directly at ${contact.email}.`,
  },
] satisfies Array<FaqItem>
