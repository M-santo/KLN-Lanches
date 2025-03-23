import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FeaturedProducts from "./components/featured-products"
import HeroSection from "./components/hero-section"
import CategorySection from "./components/category-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Nossos Produtos</h2>
        <Tabs defaultValue="destaques" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="destaques">Destaques</TabsTrigger>
            <TabsTrigger value="salgados">Salgados</TabsTrigger>
            <TabsTrigger value="doces">Doces</TabsTrigger>
            <TabsTrigger value="bolos">Bolos</TabsTrigger>
          </TabsList>
          <TabsContent value="destaques">
            <FeaturedProducts />
          </TabsContent>
          <TabsContent value="salgados">
            <CategorySection category="salgados" />
          </TabsContent>
          <TabsContent value="doces">
            <CategorySection category="doces" />
          </TabsContent>
          <TabsContent value="bolos">
            <CategorySection category="bolos" />
          </TabsContent>
        </Tabs>
      </div>

      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Encomendas para Festas</h2>
            <p className="text-muted-foreground mb-6">
              Estamos prontos para tornar seu evento especial com nossos deliciosos salgados e bolos. Faça sua encomenda
              com antecedência!
            </p>
            <Button asChild size="lg">
              <Link href="/encomendas">Fazer Encomenda</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

