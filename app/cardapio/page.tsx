import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CategorySection from "../components/category-section"

export default function MenuPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Cardápio</h1>

      <Tabs defaultValue="salgados" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="salgados">Salgados</TabsTrigger>
          <TabsTrigger value="doces">Doces</TabsTrigger>
          <TabsTrigger value="bolos">Bolos</TabsTrigger>
        </TabsList>
        <TabsContent value="salgados">
          <div className="py-6">
            <h2 className="text-2xl font-bold mb-4">Nossos Salgados</h2>
            <p className="text-muted-foreground mb-6">Salgados frescos e saborosos, perfeitos para qualquer ocasião.</p>
            <CategorySection category="salgados" />
          </div>
        </TabsContent>
        <TabsContent value="doces">
          <div className="py-6">
            <h2 className="text-2xl font-bold mb-4">Nossos Doces</h2>
            <p className="text-muted-foreground mb-6">Doces deliciosos para adoçar seu dia.</p>
            <CategorySection category="doces" />
          </div>
        </TabsContent>
        <TabsContent value="bolos">
          <div className="py-6">
            <h2 className="text-2xl font-bold mb-4">Nossos Bolos</h2>
            <p className="text-muted-foreground mb-6">Bolos artesanais para festas e eventos especiais.</p>
            <CategorySection category="bolos" />
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

