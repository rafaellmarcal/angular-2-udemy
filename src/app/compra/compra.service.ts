import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarrinhoService } from 'app/restaurante-detalhe/carrinho/carrinho.service';
import { CarrinhoItem } from 'app/restaurante-detalhe/carrinho/carrinho-item.model';
import { Compra } from 'app/compra/compra.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MEAT_API } from 'app/app.api';
import { LoginService } from '../security/login/login.service';

@Injectable()
export class CompraService {

  constructor(private carrinhoService: CarrinhoService, private http: HttpClient, private loginService: LoginService) { }

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
    let headers = new HttpHeaders();

    if (this.loginService.isLoggedIn()) {
      headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`);
    }

    return this.http.post<Compra>(`${MEAT_API}/orders`, compra, { headers: headers })
      .map(compra => compra.id);
  }
}
