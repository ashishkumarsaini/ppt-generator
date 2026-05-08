import { createFileRoute } from '@tanstack/react-router'

import { HomePage } from '#/components/site/home-page.tsx'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return <HomePage />
}
