import { MenuItem } from 'app/restaurante-detalhe/menu-item/menu-item.model';

export class CarrinhoItem {
  constructor(public menuItem: MenuItem, public quantidade: number = 1) { }

  value(): number {
    return this.menuItem.price * this.quantidade;
  }
}
