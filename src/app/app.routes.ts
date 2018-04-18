import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteDetalheComponent } from './restaurante-detalhe/restaurante-detalhe.component';
import { MenuComponent } from 'app/restaurante-detalhe/menu/menu.component';
import { ReviewsComponent } from 'app/restaurante-detalhe/reviews/reviews.component';
import { CompraFinalizadaComponent } from 'app/compra-finalizada/compra-finalizada.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { LoggedInGuard } from './security/loggedin.guard';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login/:to', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  {
    path: 'restaurantes/:id', component: RestauranteDetalheComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: MenuComponent },
      { path: 'reviews', component: ReviewsComponent }
    ]
  },
  { path: 'restaurantes', component: RestaurantesComponent },
  {
    path: 'compra', loadChildren: './compra/compra.module#CompraModule',
    canLoad: [LoggedInGuard]
  },
  { path: 'compra-finalizada', component: CompraFinalizadaComponent },
  { path: '**', component: NotFoundComponent }
];
