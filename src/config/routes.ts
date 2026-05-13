export const appRoutes = {
  home: '/',
  getLicensed: '/get-licensed',
  industry: '/industry',
  team: '/team',
  faq: '/faq',
  careers: '/careers',
  portal: '/portal',
} as const

export type AppRoute = (typeof appRoutes)[keyof typeof appRoutes]
