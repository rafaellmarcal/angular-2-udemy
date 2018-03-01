import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CarrinhoService } from 'app/restaurante-detalhe/carrinho/carrinho.service';
import { CarrinhoItem } from 'app/restaurante-detalhe/carrinho/carrinho-item.model';
import { Compra } from 'app/compra/compra.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MEAT_API } from 'app/app.api';

@Injectable()
export class CompraService {

  constructor(private carrinhoService: CarrinhoService, private http: Http) { }

  itensCarrinho(): CarrinhoItem[] {
    return this.carrinhoService.itens;
  }

  valorItens(): number {
    return this.carrinhoService.total();
  }

  aumentarQuantidade(item: CarrinhoItem) {
    this.carrinhoService.aumentarQuantidade(item);
  }

  diminuirQuantidade(item: CarrinhoItem) {
    this.carrinhoService.diminuirQuantidade(item);
  }

  removerItem(item: CarrinhoItem) {
    this.carrinhoService.removerItem(item);
  }

  limpar() {
    this.carrinhoService.limpar();
  }

  checarCompra(compra: Compra): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${MEAT_API}/orders`, JSON.stringify(compra), new RequestOptions({ headers: headers }))
      .map(response => response.json())
      .map(compra => compra.id);
  }
}
