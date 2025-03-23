"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
}

export default function ProductCard({ product }: { product: Product }) {
  const { toast } = useToast()
  const [quantity, setQuantity] = useState(1)

  const addToCart = () => {
    // In a real app, this would add to a cart state or context
    toast({
      title: "Adicionado ao carrinho",
      description: `${quantity}x ${product.name} adicionado ao carrinho`,
    })
  }

  return (
    <Card className="overflow-hidden">
      <Link href={`/produto/${product.id}`}>
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link href={`/produto/${product.id}`}>
          <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-2">{product.description}</p>
        <p className="font-bold text-lg">R$ {product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center gap-2">
        <div className="flex items-center border rounded-md">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </Button>
          <span className="w-8 text-center">{quantity}</span>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => setQuantity(quantity + 1)}>
            +
          </Button>
        </div>
        <Button className="flex-1" onClick={addToCart}>
          Adicionar
        </Button>
      </CardFooter>
    </Card>
  )
}

