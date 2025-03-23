import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative bg-primary/10 py-20">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">LRN Salgados</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Deliciosos lanches, salgados, doces e bolos para todas as ocasiões
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/cardapio">Ver Cardápio</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/encomendas">Fazer Encomenda</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

