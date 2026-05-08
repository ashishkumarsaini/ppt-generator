import { Link } from '@tanstack/react-router'
import {
  ArrowRight,
  BadgeCheck,
  FileText,
  LayoutDashboard,
  Presentation,
  WandSparkles,
} from 'lucide-react'

import { Button } from '#/components/ui/button.tsx'
import { Header } from '#/components/site/header.tsx'
import { Footer } from '#/components/site/footer.tsx'

const workflow = [
  {
    title: 'Bring the source',
    description: 'Start with notes, a brief, research, or a rough prompt.',
    icon: FileText,
  },
  {
    title: 'Shape the story',
    description: 'Generate a structured outline with slide-level intent.',
    icon: WandSparkles,
  },
  {
    title: 'Refine the deck',
    description: 'Review, adjust, and export presentation-ready slides.',
    icon: Presentation,
  },
]

const stats = [
  ['12+', 'slide patterns'],
  ['3 min', 'draft target'],
  ['PPTX', 'export format'],
]

export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="border-b">
          <div className="mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <div className="max-w-2xl space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border bg-muted/40 px-3 py-1 text-sm text-muted-foreground">
                <BadgeCheck
                  className="size-4 text-primary"
                  aria-hidden="true"
                />
                Decks from idea to export
              </div>
              <div className="space-y-5">
                <h1 className="text-4xl font-semibold tracking-normal text-balance sm:text-5xl lg:text-6xl">
                  Create client-ready presentations without starting from a
                  blank slide.
                </h1>
                <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                  ppt-generator turns raw material into structured, polished
                  slide drafts so you can focus on narrative, quality, and
                  decisions.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link to="/register">
                    Start creating
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/login">Sign in</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-4 shadow-sm">
              <div className="rounded-lg border bg-muted/30 p-4">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium">
                      Quarterly strategy deck
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Draft in progress
                    </p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    78%
                  </span>
                </div>
                <div className="space-y-3">
                  {['Executive narrative', 'Market signal', 'Growth bets'].map(
                    (slide, index) => (
                      <div
                        key={slide}
                        className="flex items-center gap-3 rounded-lg border bg-background p-3"
                      >
                        <span className="flex size-9 items-center justify-center rounded-md bg-muted text-sm font-medium">
                          {index + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium">
                            {slide}
                          </p>
                          <p className="truncate text-sm text-muted-foreground">
                            Layout, speaker notes, and content direction
                          </p>
                        </div>
                        <LayoutDashboard
                          className="size-4 text-muted-foreground"
                          aria-hidden="true"
                        />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="workflow" className="border-b py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="grid gap-5 md:grid-cols-3">
              {workflow.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border bg-card p-5"
                >
                  <item.icon
                    className="mb-5 size-6 text-primary"
                    aria-hidden="true"
                  />
                  <h2 className="mb-2 text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="quality" className="py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-medium text-primary">
                Built for polish
              </p>
              <h2 className="text-3xl font-semibold tracking-normal">
                A focused workflow for turning messy inputs into usable decks.
              </h2>
            </div>
            <div id="exports" className="grid gap-3 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-xl border bg-card p-5">
                  <p className="text-2xl font-semibold">{value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
