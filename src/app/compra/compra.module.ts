import { NgModule } from '@angular/core';
import { CompraComponent } from './compra.component';
import { ItemCompraComponent } from './item-compra/item-compra.component';
import { CustosEntregaComponent } from './custos-entrega/custos-entrega.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  { path: '', component: CompraComponent }
];

@NgModule({
  declarations: [CompraComponent, ItemCompraComponent, CustosEntregaComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class CompraModule { }
