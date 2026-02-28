import { Injectable, inject } from '@angular/core';

import { Store, Action, Selector, State, StateContext } from '@ngxs/store';
import { Select2Data } from 'ng-select2-component';
import { tap } from 'rxjs';

import { IProduct, IProductModel, IVariation } from '../../interface/product.interface';
import { NotificationService } from '../../services/notification.service';
import { ProductService } from '../../services/product.service';
import {
  GetProductsAction,
  CreateProductAction,
  EditProductAction,
  UpdateProductAction,
  UpdateProductStatusAction,
  ApproveProductStatusAction,
  DeleteProductAction,
  DeleteAllProductAction,
  ReplicateProductAction,
  ExportProductAction,
  ImportProductAction,
  DownloadAction,
} from '../action/product.action';

export class ProductStateModel {
  product = {
    data: [] as IProduct[],
    total: 0,
  };
  selectedProduct: IProduct | null;
  topSellingProducts: IProduct[];
}

@State<ProductStateModel>({
  name: 'product',
  defaults: {
    product: {
      data: [],
      total: 0,
    },
    selectedProduct: null,
    topSellingProducts: [],
  },
})
@Injectable()
export class ProductState {
  private store = inject(Store);
  private notificationService = inject(NotificationService);
  private productService = inject(ProductService);

  @Selector()
  static product(state: ProductStateModel) {
    return state.product;
  }

  @Selector()
  static products(state: ProductStateModel) {
    return state.product.data
      .filter(data => data.id !== state.selectedProduct?.id)
      .map((res: IProduct) => {
        return {
          label: res?.name,
          value: res?.id,
          data: {
            type: res.type,
            name: res.name,
            slug: res.slug,
            stock_status: res.stock_status,
            image: res.product_thumbnail
              ? res.product_thumbnail.original_url
              : 'assets/images/product.png',
          },
        };
      });
  }

  @Selector()
  static digitalProducts(state: ProductStateModel) {
    let products: Select2Data = [];
    state.product.data
      .filter(data => data.id !== state.selectedProduct?.id && data.product_type == 'digital')
      .map((res: IProduct) => {
        products.push({
          label: res?.name,
          value: res?.id,
          data: {
            name: res.name,
            product_id: res?.id,
            variation_id: null,
            image: res.product_thumbnail
              ? res.product_thumbnail.original_url
              : 'assets/images/product.png',
          },
        });
        if (res?.variations?.length) {
          res.variations.map((variation: IVariation) => {
            products.push({
              label: variation?.name,
              value: variation?.id!,
              data: {
                name: variation.name,
                product_id: res?.id,
                variation_id: variation?.id,
                image: variation.variation_image
                  ? variation.variation_image.original_url
                  : 'assets/images/product.png',
              },
            });
          });
        }
      });
    return products;
  }

  @Selector()
  static selectedProduct(state: ProductStateModel) {
    return state.selectedProduct;
  }

  @Selector()
  static topSellingProducts(state: ProductStateModel) {
    return state.topSellingProducts;
  }

  @Action(GetProductsAction)
  getProducts(ctx: StateContext<ProductStateModel>, action: GetProductsAction) {
    return this.productService.getProducts(action.payload).pipe(
      tap({
        next: (result: any) => {
          // API returns server-side paginated data
          const products = result.data || [];
          const total = result.total ?? result.Total ?? products.length;

          if (action?.payload?.['top_selling']) {
            ctx.patchState({
              topSellingProducts: products,
            });
          } else {
            ctx.patchState({
              product: {
                data: products,
                total: total,
              },
            });
          }
        },
        error: err => {
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(CreateProductAction)
  create(ctx: StateContext<ProductStateModel>, { payload }: CreateProductAction) {
    return this.productService.createProduct(payload).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('Product created successfully');
          this.store.dispatch(new GetProductsAction());
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to create product');
        },
      }),
    );
  }

  @Action(EditProductAction)
  edit(ctx: StateContext<ProductStateModel>, { id }: EditProductAction) {
    const state = ctx.getState();
    const cached = state.product.data.find(product => product.id == id);
    if (cached) {
      ctx.patchState({ selectedProduct: cached });
      return;
    }
    return this.productService.getProducts().pipe(
      tap({
        next: (results: any) => {
          const products = results.data || [];
          const result = products.find((product: IProduct) => product.id == id);
          ctx.patchState({
            product: {
              data: products,
              total: results.total || products.length,
            },
            selectedProduct: result || null,
          });
        },
        error: err => {
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(UpdateProductAction)
  update(ctx: StateContext<ProductStateModel>, { payload, id }: UpdateProductAction) {
    return this.productService.updateProduct(id, payload).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('Product updated successfully');
          this.store.dispatch(new GetProductsAction());
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to update product');
        },
      }),
    );
  }

  @Action(UpdateProductStatusAction)
  updateStatus(ctx: StateContext<ProductStateModel>, { id, status }: UpdateProductStatusAction) {
    return this.productService.updateProductStatus(id, status).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('Product status updated successfully');
          this.store.dispatch(new GetProductsAction());
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to update status');
        },
      }),
    );
  }

  @Action(ApproveProductStatusAction)
  approveStatus(ctx: StateContext<ProductStateModel>, { id, status }: ApproveProductStatusAction) {
    // Approve uses same status endpoint
    return this.productService.updateProductStatus(id, status).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('Product approval updated');
          this.store.dispatch(new GetProductsAction());
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to update approval');
        },
      }),
    );
  }

  @Action(DeleteProductAction)
  delete(ctx: StateContext<ProductStateModel>, { id }: DeleteProductAction) {
    return this.productService.deleteProduct(id).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('Product deleted successfully');
          this.store.dispatch(new GetProductsAction());
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to delete product');
        },
      }),
    );
  }

  @Action(DeleteAllProductAction)
  deleteAll(ctx: StateContext<ProductStateModel>, { ids }: DeleteAllProductAction) {
    return this.productService.deleteAllProducts(ids).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('Products deleted successfully');
          this.store.dispatch(new GetProductsAction());
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to delete products');
        },
      }),
    );
  }

  @Action(ReplicateProductAction)
  replicateProduct(_ctx: StateContext<ProductStateModel>, { ids: _ids }: ReplicateProductAction) {
    // Replicate Product Logic Here
  }

  @Action(ImportProductAction)
  import(_ctx: StateContext<ProductStateModel>, _action: ImportProductAction) {
    // Import Product Logic Here
  }

  @Action(ExportProductAction)
  export(_ctx: StateContext<ProductStateModel>, _action: ExportProductAction) {
    // Export Product Logic Here
  }

  @Action(DownloadAction)
  download(_ctx: StateContext<ProductStateModel>, _action: DownloadAction) {
    // Download Product Logic Here
  }
}
