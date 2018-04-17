import { Restaurante } from './restaurante/restaurante.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MEAT_API } from 'app/app.api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from 'app/app.error-handler';
import { MenuItem } from 'app/restaurante-detalhe/menu-item/menu-item.model';

@Injectable()
export class RestaurantesService {

  constructor(private http: HttpClient) { }

  restaurantes(search?: string): Observable<Restaurante[]> {
    let params: HttpParams = undefined;
    if (search) {
      params = new HttpParams().set('q', search);
    }
    return this.http.get<Restaurante[]>(`${MEAT_API}/restaurants`, { params: params });
  }

  restaurantePorId(id: string): Observable<Restaurante> {
    return this.http.get<Restaurante>(`${MEAT_API}/restaurants/${id}`);
  }

  reviewsDoRestaurante(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`);
  }

  menuDoRestaurante(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
  }
}
