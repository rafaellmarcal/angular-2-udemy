import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarrinhoItem } from 'app/restaurante-detalhe/carrinho/carrinho-item.model';

@Component({
  selector: 'mt-item-compra',
  templateUrl: './item-compra.component.html'
})
export class ItemCompraComponent implements OnInit {

  @Input() itens: CarrinhoItem[];

  @Output() aumentarQuantidade = new EventEmitter<CarrinhoItem>();
  @Output() diminuirQuantidade = new EventEmitter<CarrinhoItem>();
  @Output() removerCarrinhoItem = new EventEmitter<CarrinhoItem>();

  constructor() { }

  ngOnInit() {
  }

  emitAumentarQuantidade(item: CarrinhoItem) {
    this.aumentarQuantidade.emit(item);
  }

  emitDiminuirQuantidade(item: CarrinhoItem) {
    this.diminuirQuantidade.emit(item);
  }

  emitRemoverCarrinhoItem(item: CarrinhoItem) {
    this.removerCarrinhoItem.emit(item);
  }
}
