import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute()({
  component: Contact,
})

function Contact() {
  return (
    <div>
      <h2>/contact route</h2>
    </div>
  )
}
