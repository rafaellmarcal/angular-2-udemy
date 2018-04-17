class Compra {
  constructor(
    public endereco: string,
    public numero: number,
    public complemento: string,
    public formaPagamento: string,
    public itensCompra: ItemCompra[] = [],
    public id?: string
  ) { }
}

class ItemCompra {
  constructor(public quantidade: number, public menuId: string) { }
}

export { Compra, ItemCompra }
