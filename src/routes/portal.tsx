import { createFileRoute } from '@tanstack/react-router'
import { PageBanner } from '#/components/PageBanner'
import { PortalClient } from '#/components/PortalClient'
import { getPortalData } from '#/server/portal'

export const Route = createFileRoute('/portal')({
  loader: () => getPortalData(),
  component: Portal,
})

function Portal() {
  const initial = Route.useLoaderData()

  return (
    <>
      <PageBanner
        eyebrow="Agent Portal · Restricted"
        intro="Contracting links, training, dialer sign-up, and promotional guidelines."
        title={
          <>
            For JG Financial
            <br />
            <em className="gradient-text">agents only.</em>
          </>
        }
      />
      <PortalClient initial={initial} />
    </>
  )
}
