import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AddToCartButton from "@/app/components/add-to-cart-button"

// Mock data - in a real app, this would come from a database
const products = [
  {
    id: 1,
    name: "Coxinha de Frango",
    description:
      "Deliciosa coxinha recheada com frango desfiado e temperada com nosso tempero especial. Massa crocante por fora e macia por dentro.",
    price: 5.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "salgados",
  },
  {
    id: 2,
    name: "Bolo de Chocolate",
    description:
      "Bolo de chocolate com cobertura de brigadeiro, massa fofinha e úmida. Perfeito para festas de aniversário ou para um lanche especial.",
    price: 45.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "bolos",
  },
  // Add more products as needed
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Produto não encontrado</h1>
        <p className="mb-6">O produto que você está procurando não existe.</p>
        <Button asChild>
          <Link href="/cardapio">Voltar para o Cardápio</Link>
        </Button>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <Link href="/cardapio" className="text-primary hover:underline mb-6 inline-block">
        ← Voltar para o Cardápio
      </Link>

      <div className="grid md:grid-cols-2 gap-8 mt-4">
        <div className="relative h-[400px] w-full">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-bold text-primary mb-4">R$ {product.price.toFixed(2)}</p>
          <div className="border-t border-b py-4 my-4">
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <AddToCartButton product={product} />

          <div className="mt-8">
            <h3 className="font-semibold mb-2">Informações adicionais:</h3>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Produzido artesanalmente</li>
              <li>Ingredientes frescos e selecionados</li>
              <li>Disponível para entrega ou retirada</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

