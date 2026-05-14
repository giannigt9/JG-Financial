import { createHmac, timingSafeEqual } from 'node:crypto'
import { createServerFn } from '@tanstack/react-start'
import {
  getCookie,
  setCookie,
  setResponseHeader,
} from '@tanstack/react-start/server'
import { portalTabs } from '#/content/portal'
import { getRequiredEnv } from './env'
import type { PortalTab } from '#/content/portal'

const COOKIE_NAME = '__Host-jg_portal'
const SESSION_TTL_SECONDS = 60 * 60 * 8

export type PortalAccessState =
  | {
      authenticated: false
      error?: string
      tabs: []
    }
  | {
      authenticated: true
      tabs: Array<PortalTab>
    }

export const getPortalData = createServerFn({ method: 'GET' }).handler(() => {
  noStore()

  if (!isAuthenticated()) {
    return unauthenticated()
  }

  return {
    authenticated: true,
    tabs: portalTabs,
  } satisfies PortalAccessState
})

export const loginPortal = createServerFn({ method: 'POST' })
  .inputValidator((input: { password: string }) => ({
    password: input.password,
  }))
  .handler(({ data }) => {
    noStore()

    if (!safeEqual(data.password, getPortalPassword())) {
      return unauthenticated(
        'Incorrect password. Try again or contact your manager.',
      )
    }

    setCookie(COOKIE_NAME, createSession(), {
      httpOnly: true,
      maxAge: SESSION_TTL_SECONDS,
      path: '/',
      sameSite: 'lax',
      secure: true,
    })

    return {
      authenticated: true,
      tabs: portalTabs,
    } satisfies PortalAccessState
  })

function unauthenticated(error?: string): PortalAccessState {
  return {
    authenticated: false,
    error,
    tabs: [],
  }
}

function noStore() {
  setResponseHeader('cache-control', 'no-store')
}

function isAuthenticated() {
  const session = getCookie(COOKIE_NAME)
  if (!session) {
    return false
  }

  const [expiresAt, signature] = session.split('.')
  const expires = Number(expiresAt)

  return (
    Number.isFinite(expires) &&
    expires > Date.now() &&
    safeEqual(signature, sign(expiresAt))
  )
}

function createSession() {
  const expiresAt = String(Date.now() + SESSION_TTL_SECONDS * 1000)
  return `${expiresAt}.${sign(expiresAt)}`
}

function sign(value: string) {
  return createHmac('sha256', getSessionSecret()).update(value).digest('hex')
}

function safeEqual(a = '', b = '') {
  const left = Buffer.from(a)
  const right = Buffer.from(b)

  return left.length === right.length && timingSafeEqual(left, right)
}

function getPortalPassword() {
  return getRequiredEnv('AGENT_PORTAL_PASSWORD')
}

function getSessionSecret() {
  return getRequiredEnv('SESSION_SECRET')
}
