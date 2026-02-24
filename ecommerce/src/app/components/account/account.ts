import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { Sidebar } from './sidebar/sidebar';
import { Breadcrumb } from '../../shared/components/widgets/breadcrumb/breadcrumb';
import { IBreadcrumb } from '../../shared/interface/breadcrumb.interface';
import { AccountService } from '../../shared/services/account.service';

@Component({
  selector: 'app-account',
  imports: [RouterModule, TranslateModule, Breadcrumb, Sidebar],
  templateUrl: './account.html',
  styleUrl: './account.scss',
})
export class Account {
  private router = inject(Router);
  private accountService = inject(AccountService);

  public breadcrumb: IBreadcrumb = {
    title: 'Dashboard',
    items: [{ label: 'Dashboard', active: false }],
  };

  constructor() {
    this.router.events.subscribe(() => {
      this.breadcrumb.title = this.router?.url?.split('?')[0]?.split('/')?.pop()!;
      if (this.router?.url.includes('order/details')) {
        this.breadcrumb.title = 'Order';
      }
      this.breadcrumb.items = [];
      this.breadcrumb.items.push({ label: this.breadcrumb.title, active: false });
    });
  }

  openMenu() {
    this.accountService.isOpenMenu = true;
  }
}
