import { Link } from '@tanstack/react-router'
import { KeyRound } from 'lucide-react'

import { SocialAuthButtons } from '#/components/auth/social-auth-buttons.tsx'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#/components/ui/card.tsx'
import { FieldDescription } from '#/components/ui/field.tsx'

export function LoginForm({ redirectTo }: { redirectTo?: string }) {
  return (
    <Card className="w-full max-w-[420px] rounded-xl shadow-sm">
      <CardHeader className="gap-3 text-center">
        <div className="mx-auto flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
          <KeyRound className="size-5" aria-hidden="true" />
        </div>
        <div className="space-y-1">
          <CardTitle className="text-2xl font-semibold tracking-normal">
            Welcome back
          </CardTitle>
          <CardDescription>
            Sign in to continue building presentation decks.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <SocialAuthButtons redirectTo={redirectTo} />

          {/*
          Email/password login is intentionally parked for later.

          <form className="space-y-6">
            <FieldGroup className="gap-4">
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <div className="relative">
                  <Mail
                    className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@company.com"
                    className="pl-9"
                  />
                </div>
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                />
              </Field>
            </FieldGroup>

            <Button type="submit" className="w-full" size="lg">
              Sign in
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </form>
          */}

          <FieldDescription className="text-center">
            New to ppt-generator?{' '}
            <Link
              to="/register"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Create an account
            </Link>
          </FieldDescription>
        </div>
      </CardContent>
    </Card>
  )
}
