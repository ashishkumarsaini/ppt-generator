import { useState } from 'react'
import { Chrome, Github } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '#/components/ui/button.tsx'
import { authClient } from '#/lib/auth-client'

type SocialProvider = 'github' | 'google'

const providers: Array<{
  id: SocialProvider
  label: string
  icon: typeof Github
}> = [
  {
    id: 'github',
    label: 'Continue with GitHub',
    icon: Github,
  },
  {
    id: 'google',
    label: 'Continue with Google',
    icon: Chrome,
  },
]

export function SocialAuthButtons({
  redirectTo = '/',
}: {
  redirectTo?: string
}) {
  const [isSubmitting, setIsSubmitting] = useState<SocialProvider | null>(null)

  const handleSocialLogin = async (provider: SocialProvider) => {
    try {
      setIsSubmitting(provider)

      await authClient.signIn.social({
        provider,
        callbackURL: redirectTo,
        fetchOptions: {
          onSuccess: () => {
            toast.success('Logged in successfully')
          },
          onError: ({ error }) => {
            toast.error(error.message || 'Failed to log in')
            setIsSubmitting(null)
          },
        },
      })
    } catch {
      toast.error('Unable to log in')
      setIsSubmitting(null)
    }
  }

  return (
    <div className="grid gap-3">
      {providers.map((provider) => (
        <Button
          key={provider.id}
          type="button"
          variant="outline"
          size="lg"
          className="w-full justify-center"
          disabled={isSubmitting !== null}
          onClick={() => handleSocialLogin(provider.id)}
        >
          <provider.icon className="size-4" aria-hidden="true" />
          {isSubmitting === provider.id ? 'Connecting...' : provider.label}
        </Button>
      ))}
    </div>
  )
}
