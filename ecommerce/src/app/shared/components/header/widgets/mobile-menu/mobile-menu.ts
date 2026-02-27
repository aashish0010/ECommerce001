import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngxs/store';

import { AuthService } from '../../../../services/auth.service';
import { ToggleSidebarCartAction } from '../../../../store/action/cart.action';
import { CartState } from '../../../../store/state/cart.state';
import { Observable } from 'rxjs';
import { ICart } from '../../../../interface/cart.interface';

@Component({
  selector: 'app-mobile-menu',
  imports: [RouterModule, TranslateModule, AsyncPipe],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.scss',
})
export class IMobileMenu {
  private store = inject(Store);
  private authService = inject(AuthService);
  private router = inject(Router);

  cartItem$: Observable<ICart[]> = inject(Store).select(CartState.cartItems);

  public active: string = '/';

  cartToggle(value: boolean) {
    this.store.dispatch(new ToggleSidebarCartAction(value));
  }

  activeMenu(menu: string) {
    this.active = menu;
  }

  reDirectWishlist() {
    if (!this.store.selectSnapshot(state => state.auth && state.auth.access_token)) {
      this.authService.isLogin = true;
    } else {
      void this.router.navigate(['/wishlist']);
      this.activeMenu('wishlist');
    }
  }
}
