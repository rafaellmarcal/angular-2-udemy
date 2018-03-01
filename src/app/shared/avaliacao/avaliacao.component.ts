import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mt-avaliacao',
  templateUrl: './avaliacao.component.html'
})
export class AvaliacaoComponent implements OnInit {

  @Output() avaliado = new EventEmitter<number>();

  notas: number[] = [1, 2, 3, 4, 5]
  nota: number = 0;
  notaTemporaria: number;

  constructor() { }

  ngOnInit() {
  }

  avaliar(nota: number) {
    this.nota = nota;
    this.notaTemporaria = undefined;
    this.avaliado.emit(this.nota);
  }
  avaliarTemporariamente(nota: number) {
    if (this.notaTemporaria === undefined) {
      this.notaTemporaria = this.nota;
    }
    this.nota = nota;
  }

  limparAvaliacaoTemporaria() {
    if (this.notaTemporaria !== undefined) {
      this.nota = this.notaTemporaria;
      this.notaTemporaria = undefined;
    }
  }
}
