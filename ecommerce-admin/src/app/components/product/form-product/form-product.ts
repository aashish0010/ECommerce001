import { isPlatformBrowser, AsyncPipe, NgClass } from '@angular/common';
import { Component, inject, PLATFORM_ID, input, viewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModule, NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { Select2Data, Select2Module } from 'ng-select2-component';
import { Editor, NgxEditorModule } from 'ngx-editor';
import { Observable, Subject, of, switchMap, mergeMap, takeUntil, forkJoin } from 'rxjs';

import { AdvanceDropdown } from '../../../shared/components/ui/advance-dropdown/advance-dropdown';
import { Button } from '../../../shared/components/ui/button/button';
import { FormFields } from '../../../shared/components/ui/form-fields/form-fields';
import { ICategoryModel } from '../../../shared/interface/category.interface';
import { IProduct } from '../../../shared/interface/product.interface';
import { NotificationService } from '../../../shared/services/notification.service';
import { ProductService } from '../../../shared/services/product.service';
import { GetBrandsAction } from '../../../shared/store/action/brand.action';
import { GetCategoriesAction } from '../../../shared/store/action/category.action';
import {
  CreateProductAction,
  EditProductAction,
  UpdateProductAction,
} from '../../../shared/store/action/product.action';
import { BrandState } from '../../../shared/store/state/brand.state';
import { CategoryState } from '../../../shared/store/state/category.state';
import { ProductState } from '../../../shared/store/state/product.state';

export interface ProductImage {
  url: string;
  uploading: boolean;
  file?: File;
  preview?: string;
}

@Component({
  selector: 'app-form-product',
  imports: [
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Select2Module,
    NgxEditorModule,
    FormFields,
    Button,
    AdvanceDropdown,
    AsyncPipe,
    NgClass,
  ],
  templateUrl: './form-product.html',
  styleUrl: './form-product.scss',
})
export class FormProduct {
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);
  private platformId = inject(PLATFORM_ID);
  private productService = inject(ProductService);
  private notificationService = inject(NotificationService);

  readonly type = input<string>(undefined);
  readonly nav = viewChild<NgbNav>('nav');

  product$: Observable<IProduct> = this.store.select(
    ProductState.selectedProduct,
  ) as Observable<IProduct>;
  category$: Observable<ICategoryModel> = this.store.select(
    CategoryState.category,
  ) as Observable<ICategoryModel>;
  brand$: Observable<Select2Data> = this.store.select(BrandState.brands);

  public active = 'general';
  public tabError: string[] | null = [];
  public form: FormGroup;
  public id: number;
  public selectedCategories: number[] = [];
  private destroy$ = new Subject<void>();
  public editor: Editor;
  public html = '';
  public isCodeEditor = true;
  public isBrowser: boolean;
  public textArea = new FormControl('');
  public images: ProductImage[] = [];
  public isUploading = false;

  public stocks: Select2Data = [
    { value: 'in_stock', label: 'In Stock' },
    { value: 'out_of_stock', label: 'Out of Stock' },
  ];

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.store.dispatch(new GetCategoriesAction({ type: 'product', status: 1 }));
    this.store.dispatch(new GetBrandsAction({ status: 1 }));

    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      short_description: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      sale_price: new FormControl(),
      sku: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      stock_status: new FormControl('in_stock'),
      categories: new FormControl('', [Validators.required]),
      brand_id: new FormControl(''),
      is_featured: new FormControl(0),
      status: new FormControl(1),
      image_urls: this.formBuilder.array([]),
    });
  }

  get imageUrlsControl(): FormArray {
    return this.form.get('image_urls') as FormArray;
  }

  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const files = Array.from(input.files);
    files.forEach(file => {
      // Create a preview using FileReader
      const reader = new FileReader();
      const image: ProductImage = {
        url: '',
        uploading: true,
        file: file,
        preview: '',
      };
      this.images.push(image);
      const index = this.images.length - 1;

      reader.onload = () => {
        this.images[index].preview = reader.result as string;
      };
      reader.readAsDataURL(file);

      // Upload to Cloudinary
      this.productService.uploadImage(file, 'products').subscribe({
        next: (result: any) => {
          this.images[index].url = result.url;
          this.images[index].uploading = false;
          this.syncImageUrls();
        },
        error: () => {
          this.notificationService.showError(`Failed to upload ${file.name}`);
          this.images.splice(index, 1);
          this.syncImageUrls();
        },
      });
    });

    // Reset the file input so the same file can be selected again
    input.value = '';
  }

  removeImage(index: number) {
    this.images.splice(index, 1);
    this.syncImageUrls();
  }

  private syncImageUrls() {
    this.imageUrlsControl.clear();
    this.images
      .filter(img => img.url && !img.uploading)
      .forEach(img => this.imageUrlsControl.push(new FormControl(img.url)));
    this.isUploading = this.images.some(img => img.uploading);
  }

  getText(_event: Event) {
    this.form.controls['description'].setValue(this.textArea.value);
  }

  getData(_description: Event) {
    this.textArea.setValue(this.html);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.editor = new Editor();
    }

    this.route.params
      .pipe(
        switchMap(params => {
          if (!params['id']) return of();
          return this.store
            .dispatch(new EditProductAction(params['id']))
            .pipe(mergeMap(() => this.store.select(ProductState.selectedProduct)));
        }),
        takeUntil(this.destroy$),
      )
      .subscribe(product => {
        if (!product) return;
        this.id = product.id;
        this.selectedCategories = product.categories?.map(c => c.id) || [];

        this.form.patchValue({
          name: product.name,
          short_description: product.short_description,
          description: product.description,
          price: product.price,
          sale_price: product.sale_price,
          sku: product.sku,
          quantity: product.quantity,
          stock_status: product.stock_status,
          categories: this.selectedCategories,
          brand_id: product.brand_id,
          is_featured: product.is_featured,
          status: product.status,
        });

        // Populate existing images from API response
        this.images = [];
        this.imageUrlsControl.clear();
        const imageUrls = (product as any).image_urls || [];
        if (imageUrls.length) {
          imageUrls.forEach((url: string) => {
            this.images.push({ url, uploading: false, preview: url });
            this.imageUrlsControl.push(new FormControl(url));
          });
        } else if (product.product_thumbnail?.original_url) {
          const url = product.product_thumbnail.original_url;
          this.images.push({ url, uploading: false, preview: url });
          this.imageUrlsControl.push(new FormControl(url));
        }
      });
  }

  selectCategoryItem(data: any) {
    if (Array.isArray(data)) {
      this.form.controls['categories'].setValue(data);
    }
  }

  submit(redirect: boolean = true) {
    if (this.isUploading) {
      this.notificationService.showError('Please wait for images to finish uploading');
      return;
    }

    this.form.markAllAsTouched();
    let action = new CreateProductAction(this.form.value);

    if (this.type() == 'edit' && this.id) {
      action = new UpdateProductAction(this.form.value, this.id);
    }

    if (this.form.valid) {
      this.store.dispatch(action).subscribe({
        complete: () => {
          if (redirect) void this.router.navigateByUrl('/product');
        },
      });
      this.tabError = [];
    } else {
      this.tabError = [];
      const invalidFields = Object.keys(this.form.controls).filter(
        key => this.form.controls[key].invalid,
      );
      invalidFields.forEach(invalidField => {
        const div = document
          .querySelector(`#${invalidField}`)
          ?.closest('div.tab')
          ?.getAttribute('tab');
        if (div) {
          this.tabError?.push(div);
        }
      });
      if (this.tabError.length) {
        this.nav()?.select(this.tabError[0]);
      }
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.form.reset();
  }
}
