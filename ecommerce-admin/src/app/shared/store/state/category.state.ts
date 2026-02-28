import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Store, Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { ICategory } from '../../interface/category.interface';
import { CategoryService } from '../../services/category.service';
import { NotificationService } from '../../services/notification.service';
import {
  GetCategoriesAction,
  CreateCategoryAction,
  EditCategoryAction,
  UpdateCategoryAction,
  DeleteCategoryAction,
  ExportCategoryAction,
  ImportCategoryAction,
} from '../action/category.action';

export class CategoryStateModel {
  category = {
    data: [] as ICategory[],
    total: 0,
  };
  selectedCategory: ICategory | null;
}

@State<CategoryStateModel>({
  name: 'category',
  defaults: {
    category: {
      data: [],
      total: 0,
    },
    selectedCategory: null,
  },
})
@Injectable()
export class CategoryState {
  private store = inject(Store);
  private router = inject(Router);
  private notificationService = inject(NotificationService);
  private categoryService = inject(CategoryService);

  @Selector()
  static category(state: CategoryStateModel) {
    return state.category;
  }

  @Selector()
  static categories(state: CategoryStateModel) {
    return state.category.data.map(res => {
      return {
        label: res?.name,
        value: res?.id,
        data: {
          name: res.name,
          slug: res.slug,
          image: res.image_url || 'assets/images/category.png',
        },
      };
    });
  }

  @Selector()
  static categoriesSlug(state: CategoryStateModel) {
    return state.category.data.map(res => {
      return {
        label: res?.name,
        value: res?.slug,
        data: {
          name: res.name,
          slug: res.slug,
          image: res.image_url || 'assets/images/category.png',
        },
      };
    });
  }

  @Selector()
  static selectedCategory(state: CategoryStateModel) {
    return state.selectedCategory;
  }

  @Action(GetCategoriesAction)
  getCategories(ctx: StateContext<CategoryStateModel>, action: GetCategoriesAction) {
    return this.categoryService.getCategories(action.payload).pipe(
      tap({
        next: result => {
          ctx.patchState({
            category: {
              data: result.data,
              total: result?.total ? result?.total : result.data?.length,
            },
          });
        },
        error: err => {
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(CreateCategoryAction)
  create(ctx: StateContext<CategoryStateModel>, { payload }: CreateCategoryAction) {
    return this.categoryService.createCategory(payload).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('Category created successfully');
          this.store.dispatch(new GetCategoriesAction());
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to create category');
        },
      }),
    );
  }

  @Action(EditCategoryAction)
  edit(ctx: StateContext<CategoryStateModel>, { id }: EditCategoryAction) {
    const state = ctx.getState();
    // Search in top-level and subcategories
    let found: ICategory | undefined;
    for (const cat of state.category.data) {
      if (cat.id == id) {
        found = cat;
        break;
      }
      if (cat.subcategories) {
        found = cat.subcategories.find(sc => sc.id == id);
        if (found) break;
      }
    }
    if (found) {
      ctx.patchState({ selectedCategory: found });
      return;
    }
    return this.categoryService.getCategories().pipe(
      tap({
        next: results => {
          let result: ICategory | undefined;
          for (const cat of results.data) {
            if (cat.id == id) {
              result = cat;
              break;
            }
            if (cat.subcategories) {
              result = cat.subcategories.find(sc => sc.id == id);
              if (result) break;
            }
          }
          ctx.patchState({
            category: {
              data: results.data,
              total: results.total || results.data.length,
            },
            selectedCategory: result || null,
          });
        },
        error: err => {
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(UpdateCategoryAction)
  update(ctx: StateContext<CategoryStateModel>, { payload, id }: UpdateCategoryAction) {
    return this.categoryService.updateCategory(id, payload).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('Category updated successfully');
          this.store.dispatch(new GetCategoriesAction());
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to update category');
        },
      }),
    );
  }

  @Action(DeleteCategoryAction)
  delete(ctx: StateContext<CategoryStateModel>, { id }: DeleteCategoryAction) {
    return this.categoryService.deleteCategory(id).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('Category deleted successfully');
          this.store.dispatch(new GetCategoriesAction());
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to delete category');
        },
      }),
    );
  }

  @Action(ImportCategoryAction)
  import(_ctx: StateContext<CategoryStateModel>, _action: ImportCategoryAction) {
    // Import Category Logic Here
  }

  @Action(ExportCategoryAction)
  export(_ctx: StateContext<CategoryStateModel>, _action: ExportCategoryAction) {
    // Export Category Logic Here
  }
}
