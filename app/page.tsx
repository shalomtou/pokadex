import { PokemonList } from "@/components/pokemon-list"
import { SearchBar } from "@/components/search-bar"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">Pokadex</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <SearchBar />
            <ThemeToggle />
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/shalomtou/pokadex" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <PokemonList />
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            Built with Next.js, Tailwind CSS, and PokéAPI
          </p>
          <p className="text-center text-sm text-muted-foreground md:text-right">
            &copy; {new Date().getFullYear()} Pokadex
          </p>
        </div>
      </footer>
    </div>
  )
}

