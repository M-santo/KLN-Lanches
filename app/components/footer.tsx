import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">LRN Salgados</h3>
            <p className="text-muted-foreground">Deliciosos lanches, salgados, doces e bolos para todas as ocasiões.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/cardapio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cardápio
                </Link>
              </li>
              <li>
                <Link href="/encomendas" className="text-muted-foreground hover:text-foreground transition-colors">
                  Encomendas
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <address className="not-italic text-muted-foreground">
              <p>Rua Exemplo, 123</p>
              <p>Cidade - Estado</p>
              <p>CEP: 12345-678</p>
              <p className="mt-2">Telefone: (11) 98765-4321</p>
              <p>Email: contato@lrnsalgados.com.br</p>
            </address>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LRN Salgados. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

