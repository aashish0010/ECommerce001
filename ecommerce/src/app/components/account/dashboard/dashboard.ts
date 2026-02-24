import { AsyncPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { IAccountUser } from '../../../shared/interface/account.interface';
import { GetUserDetailsAction } from '../../../shared/store/action/account.action';
import { AccountState } from '../../../shared/store/state/account.state';

@Component({
  selector: 'app-dashboard',
  imports: [AsyncPipe, RouterModule, DatePipe, TitleCasePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private store = inject(Store);

  user$: Observable<IAccountUser | null> = this.store.select(AccountState.user);

  constructor() {
    // If user is not yet in state (guard fires it async), trigger the fetch here too.
    if (!this.store.selectSnapshot(AccountState.user)) {
      this.store.dispatch(new GetUserDetailsAction());
    }
  }

  getInitials(user: IAccountUser | null): string {
    const name = this.getFullName(user);
    if (!name) return '?';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  }

  getFullName(user: IAccountUser | null): string {
    if (!user) return '';
    return [user.firstName, user.middleName, user.lastName].filter(Boolean).join(' ') || user.name || '';
  }

  getRoleName(user: IAccountUser | null): string {
    if (!user?.role) return 'Member';
    if (typeof user.role === 'string') return user.role;
    return (user.role as any)?.name || 'Member';
  }
}
