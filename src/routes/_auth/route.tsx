import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <div className="flex min-h-screen h-full grow w-full items-center justify-center bg-muted/30 px-4 py-10">
      <Outlet />
    </div>
  )
}
