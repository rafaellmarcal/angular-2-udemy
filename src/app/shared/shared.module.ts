import { NgModule, ModuleWithProviders } from '@angular/core';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../restaurante-detalhe/carrinho/carrinho.service';
import { RestaurantesService } from '../restaurantes/restaurantes.service';
import { CompraService } from '../compra/compra.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from './messages/notification.service';
import { LoginService } from '../security/login/login.service';
import { LoggedInGuard } from '../security/loggedin.guard';
import { LeaveOrderGuard } from 'app/compra/leave-order.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../security/auth.interceptor';

@NgModule({
  declarations: [InputComponent, RadioComponent, AvaliacaoComponent, SnackbarComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  exports: [InputComponent, RadioComponent,
    AvaliacaoComponent, FormsModule,
    ReactiveFormsModule, CommonModule, SnackbarComponent]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [CarrinhoService,
        RestaurantesService,
        CompraService,
        NotificationService,
        LoginService,
        LoggedInGuard,
        LeaveOrderGuard,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
      ]
    }
  }
}
