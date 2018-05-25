import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from 'app/restaurantes/restaurantes.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuItem } from 'app/restaurante-detalhe/menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(private restaurantesService: RestaurantesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantesService.menuDoRestaurante(this.route.parent.snapshot.params['id']);
  }
}
