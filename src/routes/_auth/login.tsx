import { createFileRoute } from '@tanstack/react-router'

import { LoginForm } from '#/components/auth/login-form.tsx'
import z from 'zod'

export const Route = createFileRoute('/_auth/login')({
  validateSearch: z.object({
    redirectTo: z.string().optional(),
  }),
  component: LoginPage,
})

function LoginPage() {
  const { redirectTo } = Route.useSearch()
  return <LoginForm redirectTo={redirectTo} />
}
