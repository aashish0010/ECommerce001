import { Injectable, inject } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { IColor } from '../../interface/color.interface';
import { ColorService } from '../../services/color.service';
import { GetColorsAction } from '../action/color.action';

export class ColorStateModel {
  color = {
    data: [] as IColor[],
    total: 0,
  };
}

@State<ColorStateModel>({
  name: 'color',
  defaults: {
    color: {
      data: [],
      total: 0,
    },
  },
})
@Injectable()
export class ColorState {
  private colorService = inject(ColorService);

  @Selector()
  static color(state: ColorStateModel) {
    return state.color;
  }

  @Action(GetColorsAction)
  getColors(ctx: StateContext<ColorStateModel>, action: GetColorsAction) {
    if (ctx.getState().color.data.length > 0) return;
    this.colorService.skeletonLoader = true;
    return this.colorService.getColors(action.payload).pipe(
      tap({
        next: result => {
          ctx.patchState({
            color: {
              data: result.data,
              total: result?.total ? result.total : result.data?.length,
            },
          });
        },
        complete: () => {
          this.colorService.skeletonLoader = false;
        },
        error: err => {
          this.colorService.skeletonLoader = false;
          throw new Error(err?.error?.message);
        },
      }),
    );
  }
}
