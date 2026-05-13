import { useState } from 'react'
import { Lock, ShieldCheck } from 'lucide-react'
import {
  getPortalData,
  loginPortal,
  type PortalAccessState,
} from '#/server/portal'

export function PortalClient({ initial }: { initial: PortalAccessState }) {
  const [state, setState] = useState(initial)
  const [password, setPassword] = useState('')
  const [pending, setPending] = useState(false)

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPending(true)
    const result = await loginPortal({ data: { password } })
    if (result.authenticated) {
      setState(await getPortalData())
      setPassword('')
    } else {
      setState(result)
    }
    setPending(false)
  }

  if (!state.authenticated) {
    return (
      <section className="section-pad bg-navy">
        <div className="content-shell">
          <div className="mx-auto max-w-xl border border-blue-line bg-gradient-to-br from-navy-2 to-navy p-8 text-center md:p-14">
            <div className="mx-auto grid size-18 place-items-center border border-blue-line bg-blue-bright/10 text-blue-glow">
              <Lock size={32} />
            </div>
            <h2 className="mt-7 font-display text-4xl text-white">
              Enter <em className="text-blue-glow">Agent Password</em>
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/58">
              If you are a JG Financial agent and do not know the password,
              message your manager.
            </p>
            <form className="mt-8 flex gap-3" onSubmit={submit}>
              <input
                autoComplete="current-password"
                className="min-w-0 flex-1 border border-blue-line bg-white/5 px-4 py-4 text-white outline-none transition focus:border-blue-bright"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter password"
                type="password"
                value={password}
              />
              <button
                className="bg-blue-bright px-6 text-xs font-bold uppercase tracking-[.18em] text-white transition hover:bg-blue-glow hover:text-navy disabled:opacity-60"
                disabled={pending}
                type="submit"
              >
                Unlock
              </button>
            </form>
            {state.error ? (
              <p className="mt-4 text-sm text-red-300">{state.error}</p>
            ) : null}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-pad bg-navy">
      <div className="content-shell">
        <div className="mb-10 flex items-center gap-3 text-blue-glow">
          <ShieldCheck size={22} />
          <p className="text-xs font-bold uppercase tracking-[.22em]">
            Portal Unlocked
          </p>
        </div>
        <div className="space-y-12">
          {state.tabs.map((tab) => (
            <section key={tab.id}>
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
                    <p className="text-sm leading-7 text-white/60">
                      {section.body}
                    </p>
                    {section.actions?.length ? (
                      <div className="mt-6 flex flex-wrap gap-3">
                        {section.actions.map((action) => (
                          <a
                            className="border border-blue-line px-4 py-3 text-xs font-bold uppercase tracking-[.16em] text-blue-glow transition hover:border-blue-bright hover:text-white"
                            href={action.href}
                            key={action.href}
                            rel="noopener noreferrer"
                            target="_blank"
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
          ))}
        </div>
      </div>
    </section>
  )
}
