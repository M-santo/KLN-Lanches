"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface Product {
  id: number
  name: string
  price: number
  image: string
}

export default function AddToCartButton({ product }: { product: Product }) {
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
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded-md">
          <Button
            variant="ghost"
            size="sm"
            className="h-10 w-10 p-0"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </Button>
          <span className="w-10 text-center">{quantity}</span>
          <Button variant="ghost" size="sm" className="h-10 w-10 p-0" onClick={() => setQuantity(quantity + 1)}>
            +
          </Button>
        </div>
        <Button size="lg" className="flex-1" onClick={addToCart}>
          Adicionar ao Carrinho
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">Total: R$ {(product.price * quantity).toFixed(2)}</p>
    </div>
  )
}

