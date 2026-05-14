import { useState } from 'react'
import { Icon } from '#/components/Icon'
import { loginPortal } from '#/server/portal'
import type { PortalAccessState } from '#/server/portal'
import type { PortalLicenseCost, PortalTab } from '#/content/portal'

export function PortalClient({ initial }: { initial: PortalAccessState }) {
  const [state, setState] = useState(initial)
  const [password, setPassword] = useState('')
  const [pending, setPending] = useState(false)

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPending(true)
    try {
      const result = await loginPortal({ data: { password } })
      setState(result)
      if (result.authenticated) {
        setPassword('')
      }
    } catch {
      setState({
        authenticated: false,
        error: 'Portal access failed. Try again or contact your manager.',
        tabs: [],
      })
    } finally {
      setPending(false)
    }
  }

  if (!state.authenticated) {
    return (
      <PortalLogin
        error={state.error}
        onPasswordChange={setPassword}
        onSubmit={submit}
        password={password}
        pending={pending}
      />
    )
  }

  return <PortalContent tabs={state.tabs} />
}

function PortalLogin({
  error,
  onPasswordChange,
  onSubmit,
  password,
  pending,
}: {
  error?: string
  onPasswordChange: (password: string) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  password: string
  pending: boolean
}) {
  return (
    <section className="section-pad bg-navy">
      <div className="content-shell">
        <div className="mx-auto max-w-xl border border-blue-line bg-gradient-to-br from-navy-2 to-navy p-8 text-center md:p-14">
          <div className="mx-auto grid size-18 place-items-center border border-blue-line bg-blue-bright/10 text-blue-glow">
            <Icon name="lock" size={32} />
          </div>
          <h2 className="mt-7 font-display text-4xl text-white">
            Enter <em className="text-blue-glow">Agent Password</em>
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/58">
            If you are a JG Financial agent and do not know the password,
            message your manager.
          </p>
          <form className="mt-8 flex gap-3" onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="portal-password">
              Agent portal password
            </label>
            <input
              autoComplete="current-password"
              className="min-w-0 flex-1 border border-blue-line bg-white/5 px-4 py-4 text-white outline-none transition focus:border-blue-bright"
              id="portal-password"
              onChange={(event) => onPasswordChange(event.target.value)}
              placeholder="Enter password"
              type="password"
              value={password}
            />
            <button
              aria-busy={pending}
              className="bg-blue-bright px-6 text-xs font-bold uppercase tracking-[.18em] text-white transition hover:bg-blue-glow hover:text-navy disabled:opacity-60"
              disabled={pending}
              type="submit"
            >
              Unlock
            </button>
          </form>
          {error ? <p className="mt-4 text-sm text-red-300">{error}</p> : null}
        </div>
      </div>
    </section>
  )
}

function PortalContent({ tabs }: { tabs: Array<PortalTab> }) {
  return (
    <section className="section-pad bg-navy">
      <div className="content-shell">
        <div className="mb-10 flex items-center gap-3 text-blue-glow">
          <Icon name="shield-check" size={22} />
          <p className="text-xs font-bold uppercase tracking-[.22em]">
            Portal Unlocked
          </p>
        </div>
        <div className="space-y-12">
          {tabs.map((tab) => (
            <PortalSection key={tab.id} tab={tab} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PortalSection({ tab }: { tab: PortalTab }) {
  return (
    <section>
      <h2 className="font-display text-4xl text-white">{tab.label}</h2>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {tab.sections.map((section) => (
          <article
            className="border border-blue-line bg-gradient-to-br from-navy-2 to-navy p-6"
            key={section.title}
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-2xl text-white">
                {section.title}
              </h3>
              <span className="border border-blue-line px-3 py-1 text-[10px] font-bold uppercase tracking-[.18em] text-blue-glow">
                {section.badge}
              </span>
            </div>
            <p className="text-sm leading-7 text-white/60">{section.body}</p>
            {section.stateCodes?.length ? (
              <StateCodeList codes={section.stateCodes} />
            ) : null}
            {section.licenseCosts?.length ? (
              <LicenseCostList costs={section.licenseCosts} />
            ) : null}
            {section.actions?.length ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {section.actions.map((action) => (
                  <a
                    className="border border-blue-line px-4 py-3 text-xs font-bold uppercase tracking-[.16em] text-blue-glow transition hover:border-blue-bright hover:text-white"
                    download={action.download}
                    href={action.href}
                    key={action.href}
                    rel={action.download ? undefined : 'noopener noreferrer'}
                    target={action.download ? undefined : '_blank'}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}

function StateCodeList({ codes }: { codes: Array<string> }) {
  return (
    <div className="mt-6">
      <p className="text-[11px] font-bold uppercase tracking-[.22em] text-blue-glow">
        States to buy
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {codes.map((code) => (
          <span
            className="border border-blue-line bg-blue-bright/10 px-3 py-2 text-xs font-bold uppercase tracking-[.16em] text-white"
            key={code}
          >
            {code}
          </span>
        ))}
      </div>
    </div>
  )
}

function LicenseCostList({ costs }: { costs: Array<PortalLicenseCost> }) {
  return (
    <div className="mt-6">
      <p className="text-[11px] font-bold uppercase tracking-[.22em] text-blue-glow">
        Licenses under $100
      </p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {costs.map((license) => (
          <div
            className="flex items-center justify-between gap-4 border border-blue-line bg-navy/40 px-4 py-3"
            key={license.state}
          >
            <span className="text-sm font-semibold text-white/74">
              {license.state}
            </span>
            <span className="font-display text-2xl leading-none text-blue-glow tabular-nums">
              {license.cost}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
