import { Link, useRouterState } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { contact, navItems } from '#/content/site'

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-blue-line bg-navy/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:px-8">
        <Link aria-label="JG Financial home" className="bg-white px-3 py-1" to="/">
          <img alt="JG Financial" className="h-8 w-auto" src="/jg-logo.png" />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              className="nav-link"
              data-active={pathname === item.to}
              key={item.to}
              to={item.to}
            >
              {item.label}
            </Link>
          ))}
          <a
            className="nav-link border border-blue-bright text-blue-glow"
            href={contact.discord}
            rel="noopener noreferrer"
            target="_blank"
          >
            Join Community
          </a>
        </nav>
        <button
          aria-expanded={open}
          aria-label="Toggle menu"
          className="grid size-11 place-items-center border border-blue-line text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-blue-line bg-navy px-5 py-5 lg:hidden">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                className="border-b border-blue-line py-4 text-sm font-bold uppercase tracking-[.18em] text-white"
                key={item.to}
                onClick={() => setOpen(false)}
                to={item.to}
              >
                {item.label}
              </Link>
            ))}
            <a
              className="py-4 text-sm font-bold uppercase tracking-[.18em] text-blue-glow"
              href={contact.discord}
              rel="noopener noreferrer"
              target="_blank"
            >
              Join Community
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
