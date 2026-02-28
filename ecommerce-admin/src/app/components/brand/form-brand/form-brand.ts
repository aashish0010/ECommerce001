import { Component, inject, input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { Subject, mergeMap, of, switchMap, takeUntil } from 'rxjs';

import { Button } from '../../../shared/components/ui/button/button';
import { FormFields } from '../../../shared/components/ui/form-fields/form-fields';
import { IBrand } from '../../../shared/interface/brand.interface';
import {
  CreateBrandAction,
  EditBrandAction,
  UpdateBrandAction,
} from '../../../shared/store/action/brand.action';
import { BrandState } from '../../../shared/store/state/brand.state';

@Component({
  selector: 'app-form-brand',
  imports: [TranslateModule, FormsModule, ReactiveFormsModule, FormFields, Button],
  templateUrl: './form-brand.html',
  styleUrl: './form-brand.scss',
})
export class FormBrand {
  private store = inject(Store);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private formBuilder = inject(FormBuilder);

  readonly type = input<string>(undefined);

  public form: FormGroup;
  public brand: IBrand | null;

  private destroy$ = new Subject<void>();

  constructor() {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      image_url: new FormControl(''),
      status: new FormControl(true),
    });
  }

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap(params => {
          if (!params['id']) return of();
          return this.store
            .dispatch(new EditBrandAction(params['id']))
            .pipe(mergeMap(() => this.store.select(BrandState.selectedBrand)));
        }),
        takeUntil(this.destroy$),
      )
      .subscribe(brand => {
        this.brand = brand;
        this.form.patchValue({
          name: this.brand?.name,
          description: this.brand?.description || '',
          image_url: this.brand?.image_url || '',
          status: this.brand?.status,
        });
      });
  }

  submit() {
    this.form.markAllAsTouched();
    let action = new CreateBrandAction(this.form.value);

    if (this.type() == 'edit' && this.brand?.id) {
      action = new UpdateBrandAction(this.form.value, this.brand.id);
    }

    if (this.form.valid) {
      this.store.dispatch(action).subscribe({
        complete: () => {
          void this.router.navigateByUrl('/brand');
        },
      });
    }
  }
}
