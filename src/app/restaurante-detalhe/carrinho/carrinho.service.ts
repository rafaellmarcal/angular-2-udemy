import { CarrinhoItem } from 'app/restaurante-detalhe/carrinho/carrinho-item.model';
import { MenuItem } from 'app/restaurante-detalhe/menu-item/menu-item.model';
import { Injectable } from '@angular/core';
import { NotificationService } from '../../shared/messages/notification.service';

@Injectable()
export class CarrinhoService {
  itens: CarrinhoItem[] = [];

  constructor(private notificationService: NotificationService) { }

  aumentarQuantidade(item: CarrinhoItem) {
    item.quantidade = item.quantidade + 1;
  }

  diminuirQuantidade(item: CarrinhoItem) {
    item.quantidade = item.quantidade - 1;
    if (item.quantidade === 0) {
      this.removerItem(item);
    }
  }

  adicionarItem(item: MenuItem) {
    let itemInserido = this.itens.find((mItem) => mItem.menuItem.id === item.id);

    if (itemInserido) {
      this.aumentarQuantidade(itemInserido);
    } else {
      this.itens.push(new CarrinhoItem(item));
    }

    this.notificationService.notify(`Você adicionou o item ${item.name}`);
  }

  removerItem(item: CarrinhoItem) {
    this.itens.splice(this.itens.indexOf(item), 1);
    this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`);
  }

  limpar() {
    this.itens = [];
  }

  total(): number {
    return this.itens.map(item => item.value()).reduce((prev, value) => prev + value, 0);
  }
}
