import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-compra-finalizada',
  templateUrl: './compra-finalizada.component.html'
})
export class CompraFinalizadaComponent implements OnInit {

  avaliado: boolean;

  constructor() { }

  ngOnInit() {
  }

  avaliacao() {
    this.avaliado = true;
  }

}
