import { Component, OnInit, Input } from '@angular/core';
import { Restaurante } from './restaurante.model';
import { state, style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html',
  animations: [
    trigger('restaurantAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class RestauranteComponent implements OnInit {

  restaurantState = 'ready';

  @Input() restaurante: Restaurante;

  constructor() { }

  ngOnInit() {
  }

}
