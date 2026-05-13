import type { SVGProps } from 'react'

export type IconName =
  | 'agency'
  | 'analytics'
  | 'arrow-right'
  | 'calendar'
  | 'chart'
  | 'diamond'
  | 'external-link'
  | 'gem'
  | 'globe'
  | 'headphones'
  | 'lock'
  | 'map-pin'
  | 'menu'
  | 'phone'
  | 'plane'
  | 'play'
  | 'shield-check'
  | 'sparkles'
  | 'target'
  | 'trophy'
  | 'users'
  | 'wallet'
  | 'x'

type IconProps = Omit<SVGProps<SVGSVGElement>, 'children'> & {
  name: IconName
  size?: number
  strokeWidth?: number
}

const paths: Record<IconName, Array<string>> = {
  agency: ['M4 21V7l8-4 8 4v14', 'M9 21v-7h6v7', 'M8 9h.01M12 9h.01M16 9h.01'],
  analytics: ['M4 19V5', 'M4 19h16', 'M8 15l3-4 3 2 5-7'],
  'arrow-right': ['M5 12h14', 'M13 6l6 6-6 6'],
  calendar: [
    'M7 3v4M17 3v4',
    'M4 8h16',
    'M4 5h16v16H4z',
    'M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01',
  ],
  chart: ['M4 19V5', 'M4 19h16', 'M8 17v-5M12 17V8M16 17v-8'],
  diamond: ['M6 3h12l4 6-10 12L2 9z'],
  'external-link': ['M14 3h7v7', 'M10 14 21 3', 'M18 13v6H3V8h8'],
  gem: ['M6 3h12l4 6-10 12L2 9z', 'M2 9h20M8 3l4 18 4-18'],
  globe: [
    'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z',
    'M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18',
  ],
  headphones: [
    'M4 14a8 8 0 0 1 16 0',
    'M4 14v6h4v-7H6a2 2 0 0 0-2 2ZM20 14v6h-4v-7h2a2 2 0 0 1 2 2Z',
  ],
  lock: ['M4 10h16v11H4z', 'M8 10V7a4 4 0 0 1 8 0v3'],
  'map-pin': [
    'M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z',
    'M12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z',
  ],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  phone: [
    'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6.3 6.3l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2Z',
  ],
  plane: ['M22 2 11 13', 'm22 2-7 20-4-9-9-4z'],
  play: ['m8 5 12 7-12 7z'],
  'shield-check': [
    'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z',
    'm9 12 2 2 4-5',
  ],
  sparkles: [
    'm12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z',
    'm19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9zM5 14l.8 1.7 1.7.8-1.7.8L5 19l-.8-1.7-1.7-.8 1.7-.8z',
  ],
  target: [
    'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z',
    'M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z',
    'M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z',
  ],
  trophy: [
    'M8 21h8M12 17v4',
    'M7 4h10v5a5 5 0 0 1-10 0z',
    'M7 6H4a3 3 0 0 0 3 5M17 6h3a3 3 0 0 1-3 5',
  ],
  users: [
    'M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
    'M2 21a7 7 0 0 1 14 0',
    'M17 11a4 4 0 0 1 0 8',
    'M22 21a6 6 0 0 0-4-5.7',
  ],
  wallet: [
    'M3 7h16a2 2 0 0 1 2 2v10H5a2 2 0 0 1-2-2z',
    'M3 7V5a2 2 0 0 1 2-2h12',
    'M17 13h4',
  ],
  x: ['M18 6 6 18', 'm6 6 12 12'],
}

export function Icon({
  name,
  size = 24,
  strokeWidth = 2,
  ...props
}: IconProps) {
  return (
    <svg
      aria-hidden={props['aria-label'] ? undefined : true}
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      width={size}
      {...props}
    >
      {paths[name].map((d) => (
        <path d={d} key={d} />
      ))}
    </svg>
  )
}
