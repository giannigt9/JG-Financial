import { defineConfig, loadEnv } from 'vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const serverEnvKeys = [
  'AGENT_PORTAL_PASSWORD',
  'AGENTSPACE_API_KEY',
  'SESSION_SECRET',
]

const config = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  for (const key of serverEnvKeys) {
    process.env[key] ??= env[key]
  }

  return {
    resolve: { tsconfigPaths: true },
    plugins: [tailwindcss(), tanstackStart(), netlify(), viteReact()],
  }
})

export default config
