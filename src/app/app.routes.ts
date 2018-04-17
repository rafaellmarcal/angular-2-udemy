import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteDetalheComponent } from './restaurante-detalhe/restaurante-detalhe.component';
import { MenuComponent } from 'app/restaurante-detalhe/menu/menu.component';
import { ReviewsComponent } from 'app/restaurante-detalhe/reviews/reviews.component';
import { CompraFinalizadaComponent } from 'app/compra-finalizada/compra-finalizada.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'restaurantes/:id', component: RestauranteDetalheComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: MenuComponent },
      { path: 'reviews', component: ReviewsComponent }
    ]
  },
  { path: 'compra', loadChildren: './compra/compra.module#CompraModule' },
  { path: 'compra-finalizada', component: CompraFinalizadaComponent },
  { path: '**', component: NotFoundComponent }
];
