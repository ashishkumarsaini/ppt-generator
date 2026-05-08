import { Link } from '@tanstack/react-router'
import { Sparkles } from 'lucide-react'

import { SocialAuthButtons } from '#/components/auth/social-auth-buttons.tsx'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#/components/ui/card.tsx'
import { FieldDescription } from '#/components/ui/field.tsx'

export function RegisterForm() {
  return (
    <Card className="w-full max-w-[460px] rounded-xl shadow-sm">
      <CardHeader className="gap-3 text-center">
        <div className="mx-auto flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Sparkles className="size-5" aria-hidden="true" />
        </div>
        <div className="space-y-1">
          <CardTitle className="text-2xl font-semibold tracking-normal">
            Create your workspace
          </CardTitle>
          <CardDescription>
            Start turning ideas, docs, and prompts into polished decks.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <SocialAuthButtons />

          {/*
          Email/password registration is intentionally parked for later.

          <form className="space-y-6">
            <FieldGroup className="gap-4">
              <Field>
                <FieldLabel htmlFor="name">Full name</FieldLabel>
                <div className="relative">
                  <UserRound
                    className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Ashish Saini"
                    className="pl-9"
                  />
                </div>
              </Field>
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
                  autoComplete="new-password"
                  placeholder="Create a strong password"
                />
              </Field>
            </FieldGroup>

            <Button type="submit" className="w-full" size="lg">
              Create account
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </form>
          */}

          <FieldDescription className="text-center">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Sign in
            </Link>
          </FieldDescription>
        </div>
      </CardContent>
    </Card>
  )
}
