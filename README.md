# JG Financial Site

Production TanStack Start site for JG Financial.

## Requirements

- Bun `1.2.21`
- Node-compatible runtime for production preview/deploy

## Setup

```bash
bun install
cp .env.example .env.local
```

Set `AGENT_PORTAL_PASSWORD`, `SESSION_SECRET`, and `AGENTSPACE_API_KEY` in
`.env.local`.

## Scripts

```bash
bun run dev
bun run typecheck
bun run lint
bun run test
bun run test:budget
bun run test:e2e
bun run build
bun run start
```

## Dependency Policy

Dependencies are intentionally pinned in `package.json` and locked in `bun.lock`. Review lockfile diffs before merging upgrades, especially for TanStack packages.
