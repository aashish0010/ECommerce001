import { Component, inject, output, viewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngxs/store';

import { Button } from '../../../shared/components/ui/button/button';
import { Modal } from '../../../shared/components/ui/modal/base/modal';
import { IBrand } from '../../../shared/interface/brand.interface';
import { CreateBrandAction, UpdateBrandAction } from '../../../shared/store/action/brand.action';

@Component({
  selector: 'app-brand-modal',
  imports: [CommonModule, TranslateModule, FormsModule, ReactiveFormsModule, Button, Modal],
  templateUrl: './brand-modal.html',
  styleUrl: './brand-modal.scss',
})
export class BrandModal {
  private store = inject(Store);
  private formBuilder = inject(FormBuilder);

  readonly modal = viewChild<Modal>('brandModal');
  readonly modalClosed = output<void>();

  public form: FormGroup;
  public isEdit = false;
  public editingBrand: IBrand | null = null;

  constructor() {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      status: new FormControl(true),
    });
  }

  openModal(brand?: IBrand) {
    this.isEdit = !!brand;
    this.editingBrand = brand || null;
    if (brand) {
      this.form.patchValue({
        name: brand.name,
        description: brand.description || '',
        status: brand.status,
      });
    } else {
      this.form.reset({ status: true });
    }
    this.modal()?.openModal();
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const action = this.isEdit && this.editingBrand
        ? new UpdateBrandAction(this.form.value, this.editingBrand.id)
        : new CreateBrandAction(this.form.value);

      this.store.dispatch(action).subscribe({
        complete: () => {
          this.modal()?.closeModal();
          this.modalClosed.emit();
        },
      });
    }
  }
}
