import { appRoutes } from '#/config/routes'
import type { NavigationItem } from './types'

export const navItems = [
  { label: 'Home', to: appRoutes.home },
  { label: 'Live Leaderboard', to: appRoutes.liveLeaderboard },
  { label: 'Get Licensed', to: appRoutes.getLicensed },
  { label: 'Industry', to: appRoutes.industry },
  { label: 'Team', to: appRoutes.team },
  { label: 'FAQ', to: appRoutes.faq },
  { label: 'Careers', to: appRoutes.careers },
  { label: 'Agent Portal', to: appRoutes.portal },
] satisfies Array<NavigationItem>
