import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from 'app/restaurantes/restaurantes.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private restaurantesService: RestaurantesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantesService
      .reviewsDoRestaurante(this.route.parent.snapshot.params['id']);
  }

}
