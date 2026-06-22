import { Link } from '@tanstack/react-router'
import { clsx } from 'clsx'
import { Icon } from '#/components/Icon'
import type { AppRoute } from '#/config/routes'

type ButtonVariant = 'primary' | 'outline' | 'text'
type ButtonSize = 'default' | 'lg'

type SharedButtonLinkProps = {
  children: React.ReactNode
  className?: string
  size?: ButtonSize
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

const sizes: Record<ButtonSize, string> = {
  default: 'min-h-12 px-8 py-3 text-xs',
  lg: 'min-h-14 px-12 py-4 text-sm',
}

export function ButtonLink(props: ButtonLinkProps) {
  const { children, className, size = 'default', variant = 'primary' } = props
  const classes = clsx(
    'inline-flex items-center justify-center gap-2 border font-bold uppercase tracking-[.22em] transition',
    sizes[size],
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
        {opensNewTab ? <Icon name="external-link" size={15} /> : null}
      </a>
    )
  }

  return (
    <Link className={classes} to={props.to}>
      {children}
    </Link>
  )
}
