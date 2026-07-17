import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ideas/idea')({
  component: IdeasPage,
})

function IdeasPage() {
  return <div>Hello "/ideas/idea"!</div>
}
