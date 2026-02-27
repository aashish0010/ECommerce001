import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AddressModal } from '../../../shared/components/widgets/modal/address-modal/address-modal';
import { DeleteAddressModal } from '../../../shared/components/widgets/modal/delete-address-modal/delete-address-modal';
import { NoData } from '../../../shared/components/widgets/no-data/no-data';
import { ISavedAddress } from '../../../shared/interface/user.interface';
import { DeleteAddressAction, GetAddressesAction } from '../../../shared/store/action/account.action';
import { AccountState } from '../../../shared/store/state/account.state';

@Component({
  selector: 'app-addresses',
  imports: [TranslateModule, NoData, AsyncPipe, TitleCasePipe],
  templateUrl: './addresses.html',
  styleUrl: './addresses.scss',
})
export class Addresses {
  private store = inject(Store);
  private modal = inject(NgbModal);

  addresses$: Observable<ISavedAddress[]> = this.store.select(AccountState.addresses);

  constructor() {
    this.store.dispatch(new GetAddressesAction());
  }

  AddressModal(address?: ISavedAddress) {
    const modal = this.modal.open(AddressModal, { centered: true, windowClass: 'theme-modal-2' });
    if (address) {
      modal.componentInstance.userAddress = address;
    }
  }

  removeAddress(address: ISavedAddress) {
    const modal = this.modal.open(DeleteAddressModal, { centered: true });
    if (address) {
      modal.componentInstance.userAddress = address;
    }
  }

  delete(action: string, data: ISavedAddress) {
    if (action == 'delete' && data) this.store.dispatch(new DeleteAddressAction(data.id));
  }
}
