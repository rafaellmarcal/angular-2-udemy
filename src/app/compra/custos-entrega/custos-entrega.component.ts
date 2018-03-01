import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-custos-entrega',
  templateUrl: './custos-entrega.component.html'
})
export class CustosEntregaComponent implements OnInit {

  @Input() valorEntrega: number;
  @Input() valorItens: number;

  constructor() { }

  ngOnInit() {
  }

  total(): number {
    return this.valorEntrega + this.valorItens;
  }
}
