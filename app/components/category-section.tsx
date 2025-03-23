import ProductCard from "./product-card"

// Mock data for different categories
const products = {
  salgados: [
    {
      id: 1,
      name: "Coxinha de Frango",
      description: "Deliciosa coxinha recheada com frango desfiado",
      price: 5.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "salgados",
    },
    {
      id: 4,
      name: "Empadinha de Palmito",
      description: "Empadinha recheada com palmito fresco",
      price: 6.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "salgados",
    },
    {
      id: 5,
      name: "Kibe",
      description: "Kibe tradicional com recheio de carne",
      price: 5.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "salgados",
    },
    {
      id: 6,
      name: "Bolinha de Queijo",
      description: "Bolinha de queijo crocante por fora e cremosa por dentro",
      price: 4.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "salgados",
    },
  ],
  doces: [
    {
      id: 3,
      name: "Brigadeiro Gourmet",
      description: "Brigadeiro gourmet com chocolate belga",
      price: 3.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "doces",
    },
    {
      id: 7,
      name: "Beijinho",
      description: "Beijinho de coco tradicional",
      price: 3.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "doces",
    },
    {
      id: 8,
      name: "Pudim",
      description: "Pudim de leite condensado cremoso",
      price: 12.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "doces",
    },
  ],
  bolos: [
    {
      id: 2,
      name: "Bolo de Chocolate",
      description: "Bolo de chocolate com cobertura de brigadeiro",
      price: 45.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "bolos",
    },
    {
      id: 9,
      name: "Bolo de Cenoura",
      description: "Bolo de cenoura com cobertura de chocolate",
      price: 40.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "bolos",
    },
    {
      id: 10,
      name: "Bolo de Festa",
      description: "Bolo decorado para festas e eventos especiais",
      price: 89.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "bolos",
    },
  ],
}

export default function CategorySection({ category }: { category: keyof typeof products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products[category].map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

