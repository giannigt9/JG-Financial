import { Link, useRouterState } from '@tanstack/react-router'
import { clsx } from 'clsx'
import { useState } from 'react'
import { Icon } from '#/components/Icon'
import { appRoutes } from '#/config/routes'
import { contact } from '#/content/contact'
import { navItems } from '#/content/navigation'

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })
  const isPaperHeader = pathname === appRoutes.liveLeaderboard

  return (
    <header
      className={clsx(
        'site-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl',
        isPaperHeader
          ? 'border-copper/25 bg-paper/95 shadow-[0_1px_0_rgba(111,67,38,0.08)]'
          : 'border-blue-line bg-navy/90',
      )}
      data-theme={isPaperHeader ? 'paper' : 'navy'}
    >
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:px-8">
        <Link
          aria-label="JG Financial home"
          className={clsx(
            'px-3 py-1',
            isPaperHeader
              ? 'border border-copper/20 bg-parchment shadow-[0_8px_24px_rgba(111,67,38,0.08)]'
              : 'bg-white',
          )}
          to="/"
        >
          <img
            alt="JG Financial"
            className="h-8 w-auto"
            height="32"
            src="/jg-logo.png"
            width="192"
          />
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
            className="community-link nav-link border border-blue-bright text-blue-glow"
            href={contact.discord}
            rel="noopener noreferrer"
            target="_blank"
          >
            Join Community
          </a>
        </nav>
        <button
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label="Toggle menu"
          className={clsx(
            'grid size-11 place-items-center border lg:hidden',
            isPaperHeader
              ? 'border-copper/35 text-ink'
              : 'border-blue-line text-white',
          )}
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <Icon name={open ? 'x' : 'menu'} size={22} />
        </button>
      </div>
      {open ? (
        <div
          className={clsx(
            'border-t px-5 py-5 lg:hidden',
            isPaperHeader
              ? 'border-copper/20 bg-paper'
              : 'border-blue-line bg-navy',
          )}
        >
          <nav className="flex flex-col" id="primary-navigation">
            {navItems.map((item) => (
              <Link
                className={clsx(
                  'border-b py-4 text-sm font-bold uppercase tracking-[.18em]',
                  isPaperHeader
                    ? 'border-copper/18 text-ink'
                    : 'border-blue-line text-white',
                )}
                key={item.to}
                onClick={() => setOpen(false)}
                to={item.to}
              >
                {item.label}
              </Link>
            ))}
            <a
              className={clsx(
                'py-4 text-sm font-bold uppercase tracking-[.18em]',
                isPaperHeader ? 'text-copper-strong' : 'text-blue-glow',
              )}
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
