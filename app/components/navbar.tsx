"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ShoppingCart } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Início
                </Link>
                <Link
                  href="/cardapio"
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Cardápio
                </Link>
                <Link
                  href="/encomendas"
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Encomendas
                </Link>
                <Link
                  href="/contato"
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contato
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="font-bold text-xl">
            LRN Salgados
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Início
          </Link>
          <Link href="/cardapio" className="text-sm font-medium hover:text-primary transition-colors">
            Cardápio
          </Link>
          <Link href="/encomendas" className="text-sm font-medium hover:text-primary transition-colors">
            Encomendas
          </Link>
          <Link href="/contato" className="text-sm font-medium hover:text-primary transition-colors">
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Carrinho</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

