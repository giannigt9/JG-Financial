import { Link } from '@tanstack/react-router'
import { ExternalLink } from 'lucide-react'
import { clsx } from 'clsx'
import type { AppRoute } from '#/config/routes'

type ButtonVariant = 'primary' | 'outline' | 'text'

type SharedButtonLinkProps = {
  children: React.ReactNode
  className?: string
  variant?: ButtonVariant
}

type ButtonLinkProps = SharedButtonLinkProps &
  (
    | {
        href: string
        to?: never
      }
    | {
        href?: never
        to: AppRoute
      }
  )

const styles: Record<ButtonVariant, string> = {
  primary:
    'border-blue-bright bg-blue-bright text-white hover:bg-blue-glow hover:text-navy',
  outline:
    'border-white/28 bg-transparent text-white hover:border-blue-bright hover:text-blue-glow',
  text: 'border-transparent bg-transparent px-0 text-blue-bright hover:text-blue-glow',
}

export function ButtonLink(props: ButtonLinkProps) {
  const { children, className, variant = 'primary' } = props
  const classes = clsx(
    'inline-flex min-h-12 items-center justify-center gap-2 border px-8 py-3 text-xs font-bold uppercase tracking-[.22em] transition',
    styles[variant],
    className,
  )

  if (props.href !== undefined) {
    const opensNewTab = props.href.startsWith('http')

    return (
      <a
        className={classes}
        href={props.href}
        rel={opensNewTab ? 'noopener noreferrer' : undefined}
        target={opensNewTab ? '_blank' : undefined}
      >
        {children}
        {opensNewTab ? <ExternalLink aria-hidden="true" size={15} /> : null}
      </a>
    )
  }

  return (
    <Link className={classes} to={props.to}>
      {children}
    </Link>
  )
}
