"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function OrderPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventTime: "",
    eventType: "",
    guestCount: "",
    orderType: "salgados",
    specialRequests: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit the form data to a server
    toast({
      title: "Encomenda enviada!",
      description: "Entraremos em contato em breve para confirmar os detalhes.",
    })
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-2">Encomendas para Festas</h1>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Preencha o formulário abaixo para fazer sua encomenda de salgados, doces ou bolos para seu evento especial.
      </p>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Formulário de Encomenda</CardTitle>
          <CardDescription>Todos os campos marcados com * são obrigatórios.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Informações Pessoais</h3>

              <div className="grid gap-2">
                <Label htmlFor="name">Nome Completo *</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone">Telefone *</Label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Informações do Evento</h3>

              <div className="grid gap-2">
                <Label htmlFor="eventDate">Data do Evento *</Label>
                <Input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="eventTime">Horário do Evento *</Label>
                <Input
                  id="eventTime"
                  name="eventTime"
                  type="time"
                  value={formData.eventTime}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="eventType">Tipo de Evento *</Label>
                <Select onValueChange={(value) => handleSelectChange("eventType", value)} required>
                  <SelectTrigger id="eventType">
                    <SelectValue placeholder="Selecione o tipo de evento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aniversario">Aniversário</SelectItem>
                    <SelectItem value="casamento">Casamento</SelectItem>
                    <SelectItem value="corporativo">Evento Corporativo</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="guestCount">Número de Convidados *</Label>
                <Input
                  id="guestCount"
                  name="guestCount"
                  type="number"
                  min="1"
                  value={formData.guestCount}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Detalhes da Encomenda</h3>

              <div className="grid gap-2">
                <Label>Tipo de Encomenda *</Label>
                <RadioGroup defaultValue="salgados" onValueChange={(value) => handleSelectChange("orderType", value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="salgados" id="salgados" />
                    <Label htmlFor="salgados">Salgados</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="doces" id="doces" />
                    <Label htmlFor="doces">Doces</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bolos" id="bolos" />
                    <Label htmlFor="bolos">Bolos</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="combo" id="combo" />
                    <Label htmlFor="combo">Combo (Salgados + Doces + Bolo)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="specialRequests">Pedidos Especiais</Label>
                <Textarea
                  id="specialRequests"
                  name="specialRequests"
                  placeholder="Descreva os tipos de salgados, doces ou bolos que você gostaria, quantidades, restrições alimentares, etc."
                  value={formData.specialRequests}
                  onChange={handleChange}
                />
              </div>
            </div>

            <Button type="submit" className="w-full">
              Enviar Encomenda
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}

