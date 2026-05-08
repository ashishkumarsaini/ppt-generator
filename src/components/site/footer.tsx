import { Link } from '@tanstack/react-router'
import { Presentation } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-8 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-medium text-foreground"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Presentation className="size-4" aria-hidden="true" />
          </span>
          <span>ppt-generator</span>
        </Link>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span>AI-assisted presentation building.</span>
          <a
            href="mailto:hello@ppt-generator.app"
            className="hover:text-foreground"
          >
            Contact
          </a>
          <Link to="/login" className="hover:text-foreground">
            Login
          </Link>
        </div>
      </div>
    </footer>
  )
}
