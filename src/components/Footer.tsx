import { Link } from '@tanstack/react-router'
import { contact, navItems } from '#/content/site'

export function Footer() {
  return (
    <footer className="border-t border-blue-line bg-blue-deep px-6 py-14">
      <div className="content-shell grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <img alt="JG Financial" className="h-11 w-auto bg-white px-3 py-1" src="/jg-logo.png" />
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/42">
            Protecting families. Empowering agents. Built for the virtual sales
            professional who wants the lifestyle they deserve.
          </p>
        </div>
        <FooterColumn title="Navigate">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </FooterColumn>
        <FooterColumn title="Resources">
          <a href={contact.xcel} rel="noopener noreferrer" target="_blank">
            Xcel Solutions
          </a>
          <a href={contact.stateGuide} rel="noopener noreferrer" target="_blank">
            State Guide
          </a>
          <a href={contact.nipr} rel="noopener noreferrer" target="_blank">
            NIPR Application
          </a>
          <a href={contact.agentSpace} rel="noopener noreferrer" target="_blank">
            Agent Login
          </a>
        </FooterColumn>
        <FooterColumn title="Contact">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </FooterColumn>
      </div>
      <div className="content-shell mt-8 flex flex-wrap justify-between gap-4 text-xs text-white/35">
        <span>© 2026 JG Financial. All rights reserved.</span>
        <span>National Life Insurance Agency</span>
      </div>
    </footer>
  )
}

function FooterColumn({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <div className="footer-col">
      <h3>{title}</h3>
      {children}
    </div>
  )
}
