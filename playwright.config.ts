import { defineConfig, devices } from '@playwright/test'
import { loadEnv } from 'vite'

const port = process.env.PLAYWRIGHT_PORT ?? '3000'
const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? `http://localhost:${port}`
const reuseExistingServer =
  process.env.PLAYWRIGHT_REUSE_EXISTING_SERVER === 'true'
const env = loadEnv('development', process.cwd(), '')
const agentPortalPassword = getRequiredEnv('AGENT_PORTAL_PASSWORD')
const sessionSecret = getRequiredEnv('SESSION_SECRET')

function getRequiredEnv(name: string) {
  const value = process.env[name] ?? env[name]

  if (!value) {
    throw new Error(`${name} is required`)
  }

  return value
}

process.env.AGENT_PORTAL_PASSWORD ??= agentPortalPassword
process.env.SESSION_SECRET ??= sessionSecret

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  webServer: {
    command: `bun run dev:e2e -- --port ${port}`,
    env: {
      AGENT_PORTAL_PASSWORD: agentPortalPassword,
      SESSION_SECRET: sessionSecret,
    },
    reuseExistingServer,
    url: baseURL,
  },
  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile',
      use: { ...devices['Pixel 7'] },
    },
  ],
})
