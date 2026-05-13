import { defineConfig, devices } from '@playwright/test'

const port = process.env.PLAYWRIGHT_PORT ?? '3000'
const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? `http://localhost:${port}`
const reuseExistingServer =
  process.env.PLAYWRIGHT_REUSE_EXISTING_SERVER === 'true'

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
      AGENT_PORTAL_PASSWORD: 'JGAgent2026',
      SESSION_SECRET: 'playwright-session-secret',
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
