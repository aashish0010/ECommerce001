import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Store } from '@ngxs/store';

import { AuthService } from '../../shared/services/auth.service';
import { GetUserDetailsAction } from '../../shared/store/action/account.action';
import { AccountState } from '../../shared/store/state/account.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  private store = inject(Store);
  private authService = inject(AuthService);

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.store.selectSnapshot((s) => s.auth?.access_token);
    if (!token) {
      this.authService.redirectUrl = state.url;
      this.authService.isLogin = true;
      return false;
    }

    // Fetch user data in the background if not already in state.
    // Do NOT await — return true immediately so the route activates
    // and the component's own skeleton handles the loading state.
    const user = this.store.selectSnapshot(AccountState.user);
    if (!user) {
      this.store.dispatch(new GetUserDetailsAction());
    }

    return true;
  }
}
