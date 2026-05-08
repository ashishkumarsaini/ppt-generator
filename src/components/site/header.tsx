import { Link } from '@tanstack/react-router'
import { Presentation } from 'lucide-react'

import { Navbar } from './navbar'

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

        <Navbar />
      </div>
    </header>
  )
}
