import { Link } from '@tanstack/react-router'
import { Presentation, Sparkles } from 'lucide-react'

import { Button } from '#/components/ui/button.tsx'

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Presentation className="size-5" aria-hidden="true" />
          </span>
          <span className="hidden sm:inline">ppt-generator</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a
            href="#workflow"
            className="transition-colors hover:text-foreground"
          >
            Workflow
          </a>
          <a
            href="#quality"
            className="transition-colors hover:text-foreground"
          >
            Quality
          </a>
          <a
            href="#exports"
            className="transition-colors hover:text-foreground"
          >
            Exports
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link to="/login">Sign in</Link>
          </Button>
          <Button asChild>
            <Link to="/register">
              <Sparkles className="size-4" aria-hidden="true" />
              Get started
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
