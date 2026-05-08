import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-muted/30 px-4 py-10">
      <Outlet />
    </main>
  )
}
