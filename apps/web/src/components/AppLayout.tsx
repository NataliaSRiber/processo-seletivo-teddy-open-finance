import type { ReactNode } from "react"
import Nav from "./Nav"

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {

  return (
    <div className="min-h-screen bg-brand-background w-full">
      <Nav/>
      <main className="container mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  )
}