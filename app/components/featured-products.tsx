import ProductCard from "./product-card"

const featuredProducts = [
  {
    id: 1,
    name: "Coxinha de Frango",
    description: "Deliciosa coxinha recheada com frango desfiado",
    price: 5.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "salgados",
  },
  {
    id: 2,
    name: "Bolo de Chocolate",
    description: "Bolo de chocolate com cobertura de brigadeiro",
    price: 45.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "bolos",
  },
  {
    id: 3,
    name: "Brigadeiro Gourmet",
    description: "Brigadeiro gourmet com chocolate belga",
    price: 3.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "doces",
  },
  {
    id: 4,
    name: "Empadinha de Palmito",
    description: "Empadinha recheada com palmito fresco",
    price: 6.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "salgados",
  },
]

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

