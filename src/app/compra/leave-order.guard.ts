import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CompraComponent } from './compra.component';

export class LeaveOrderGuard implements CanDeactivate<CompraComponent> {
    canDeactivate(compraComponent: CompraComponent,
        activatedRoute: ActivatedRouteSnapshot,
        routerState: RouterStateSnapshot): boolean {
        if (!compraComponent.compraFinalizada()) {
            return window.confirm('Deseja desistir da compra?');
        } else {
            return true;
        }
    }
}