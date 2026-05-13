import { Link, type LinkProps } from '@tanstack/react-router'
import { ExternalLink } from 'lucide-react'
import { clsx } from 'clsx'

type ButtonVariant = 'primary' | 'outline' | 'text'

type ButtonLinkProps = {
  children: React.ReactNode
  className?: string
  href?: string
  to?: LinkProps['to']
  variant?: ButtonVariant
}

const styles: Record<ButtonVariant, string> = {
  primary:
    'border-blue-bright bg-blue-bright text-white hover:bg-blue-glow hover:text-navy',
  outline:
    'border-white/28 bg-transparent text-white hover:border-blue-bright hover:text-blue-glow',
  text: 'border-transparent bg-transparent px-0 text-blue-bright hover:text-blue-glow',
}

export function ButtonLink({
  children,
  className,
  href,
  to,
  variant = 'primary',
}: ButtonLinkProps) {
  const classes = clsx(
    'inline-flex min-h-12 items-center justify-center gap-2 border px-8 py-3 text-xs font-bold uppercase tracking-[.22em] transition',
    styles[variant],
    className,
  )

  if (href) {
    return (
      <a className={classes} href={href} rel="noopener noreferrer" target="_blank">
        {children}
        <ExternalLink size={15} />
      </a>
    )
  }

  return (
    <Link className={classes} to={to ?? '/'}>
      {children}
    </Link>
  )
}
