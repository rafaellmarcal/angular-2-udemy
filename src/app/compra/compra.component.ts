import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { CompraService } from 'app/compra/compra.service';
import { CarrinhoItem } from 'app/restaurante-detalhe/carrinho/carrinho-item.model';
import { Compra, ItemCompra } from 'app/compra/compra.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'mt-compra',
  templateUrl: './compra.component.html'
})
export class CompraComponent implements OnInit {

  compraForm: FormGroup;
  valorEntrega: number = 8;
  compraId: string;
  numeroPattern = /^[0-9]*$/;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  formaPagamento: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão de Refeição', value: 'REF' }
  ];

  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const email = group.get('email');
    const emailConfirmacao = group.get('emailConfirmacao');

    if (!email || !emailConfirmacao) {
      return undefined;
    }

    if (email.value !== emailConfirmacao.value) {
      return { emailsNaoConferem: true };
    }

    return undefined;
  }

  constructor(private compraService: CompraService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.compraForm = new FormGroup({
      nome: new FormControl('', {
        validators: [Validators.required, Validators.minLength(5)]
      }),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmacao: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      endereco: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      numero: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numeroPattern)]),
      complemento: this.formBuilder.control(''),
      formaPagamento: this.formBuilder.control('', [Validators.required])
    }, { validators: [CompraComponent.equalsTo], updateOn: 'blur' });
  }

  valorItens(): number {
    return this.compraService.valorItens();
  }

  itensCarrinho(): CarrinhoItem[] {
    return this.compraService.itensCarrinho();
  }

  aumentarQuantidade(item: CarrinhoItem) {
    this.compraService.aumentarQuantidade(item);
  }

  diminuirQuantidade(item: CarrinhoItem) {
    this.compraService.diminuirQuantidade(item);
  }

  removerItem(item: CarrinhoItem) {
    this.compraService.removerItem(item);
  }

  compraFinalizada(): boolean {
    return this.compraId !== undefined;
  }

  checarCompra(compra: Compra) {
    compra.itensCompra = this.itensCarrinho()
      .map((item: CarrinhoItem) => new ItemCompra(item.quantidade, item.menuItem.id));
    this.compraService.checarCompra(compra)
      .pipe(tap((compraId: string) => {
        this.compraId = compraId;
      }))
      .subscribe((compraId: string) => {
        this.compraService.limpar();
        this.router.navigate(['/compra-finalizada']);
      });
  }
}
