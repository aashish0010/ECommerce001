import { Component, inject, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { Select2Module } from 'ng-select2-component';

import { countryCodes } from '../../../../data/country-code';
import { ISavedAddress } from '../../../../interface/user.interface';
import { CreateAddressAction, UpdateAddressAction } from '../../../../store/action/account.action';
import { Button } from '../../button/button';

@Component({
  selector: 'app-address-modal',
  imports: [TranslateModule, FormsModule, ReactiveFormsModule, Select2Module, Button],
  templateUrl: './address-modal.html',
  styleUrl: './address-modal.scss',
})
export class AddressModal {
  public modal = inject(NgbActiveModal);
  private store = inject(Store);
  private formBuilder = inject(FormBuilder);

  @Input() userAddress: ISavedAddress;

  public form: FormGroup;
  public address: ISavedAddress | null;
  public codes = countryCodes;

  constructor() {
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      country_name: new FormControl(''),
      state_name: new FormControl(''),
      city: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required]),
      country_code: new FormControl('977', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    });
  }

  ngOnInit() {
    if (this.userAddress) {
      this.patchForm(this.userAddress);
    }
  }

  patchForm(value: ISavedAddress) {
    this.address = value;
    this.form.patchValue({
      title: value.title,
      street: value.street,
      country_name: value.country_name ?? '',
      state_name: value.state_name ?? '',
      city: value.city,
      pincode: value.pincode,
      country_code: value.country_code ?? '977',
      phone: String(value.phone ?? ''),
    });
  }

  submit() {
    this.form.markAllAsTouched();
    if (!this.form.valid) return;

    const action = this.address
      ? new UpdateAddressAction(this.form.value, this.address.id)
      : new CreateAddressAction(this.form.value);

    this.store.dispatch(action).subscribe({
      complete: () => this.modal.close('saved'),
    });
  }
}
