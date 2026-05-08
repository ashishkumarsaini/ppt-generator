import { createFileRoute } from '@tanstack/react-router'

import { HomePage } from '#/components/site/home-page.tsx'
import { authClient } from '#/lib/auth-client'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  // const { data } = authClient.useSession();


  return <HomePage />
}
