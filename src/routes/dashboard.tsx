import { createFileRoute, redirect } from '@tanstack/react-router'

import { getSession } from '#/lib/functions/auth.functions'

export const Route = createFileRoute('/dashboard')({
  beforeLoad: async ({ location }) => {
    const session = await getSession();

    if (!session?.user) {
      throw redirect({ to: '/login', search: { redirectTo: location.href } });
    }

    return session;
  },
  component: DashboardPage,
})

function DashboardPage() {
  return (
    <div>
      <div className="max-w-6xl mx-auto space-y-6 p-4 pt-24 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Dashboard
          </h1>
          <p className="text-muted-foreground">Your presentations</p>
        </div>
      </div>
    </div>
  )
}
