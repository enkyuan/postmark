import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Link } from "react-router-dom"

export function NotesPage() {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <aside className="border-r bg-muted/40 px-4 py-6 md:px-6 md:py-8">
        <div className="flex h-full flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Notes</h2>
            <Button size="icon" variant="ghost">
              <PlusIcon className="h-5 w-5" />
              <span className="sr-only">New Note</span>
            </Button>
          </div>
          <ScrollArea className="flex-1 overflow-auto">
            <div className="grid gap-2">
              <Link
                to="#"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                <FileIcon className="h-4 w-4" />
                <span>Meeting Notes</span>
              </Link>
              <Link
                to="#"
                className="flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-medium text-primary transition-colors"
              >
                <FileIcon className="h-4 w-4" />
                <span>Project Roadmap</span>
              </Link>
              <Link
                to="#"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                <FileIcon className="h-4 w-4" />
                <span>Grocery List</span>
              </Link>
              <Link
                to="#"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                <FileIcon className="h-4 w-4" />
                <span>Book Ideas</span>
              </Link>
              <Link
                to="#"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                <FileIcon className="h-4 w-4" />
                <span>Travel Plans</span>
              </Link>
            </div>
          </ScrollArea>
        </div>
      </aside>
      <main className="flex-1 p-6 md:p-8">
        <div className="flex h-full flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Project Roadmap</h1>
            <div className="flex items-center gap-2">
              <Button size="icon" variant="ghost">
                <BoldIcon className="h-5 w-5" />
                <span className="sr-only">Bold</span>
              </Button>
              <Button size="icon" variant="ghost">
                <ItalicIcon className="h-5 w-5" />
                <span className="sr-only">Italic</span>
              </Button>
              <Button size="icon" variant="ghost">
                <HeadingIcon className="h-5 w-5" />
                <span className="sr-only">Heading</span>
              </Button>
            </div>
          </div>
          <ScrollArea className="flex-1 overflow-auto">
            <div className="prose prose-gray dark:prose-invert">
            </div>
          </ScrollArea>
        </div>
      </main>
    </div>
  )
}

function BoldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />
    </svg>
  )
}


function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function HeadingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 12h12" />
      <path d="M6 20V4" />
      <path d="M18 20V4" />
    </svg>
  )
}


function ItalicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" x2="10" y1="4" y2="4" />
      <line x1="14" x2="5" y1="20" y2="20" />
      <line x1="15" x2="9" y1="4" y2="20" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
