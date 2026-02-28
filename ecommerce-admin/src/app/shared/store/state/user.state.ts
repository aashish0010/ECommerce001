import { Injectable, inject } from '@angular/core';

import { Store, Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { IUser } from '../../interface/user.interface';
import { NotificationService } from '../../services/notification.service';
import { UserService } from '../../services/user.service';
import {
  GetUsersAction,
  CreateUserAction,
  EditUserAction,
  UpdateUserAction,
  UpdateUserStatusAction,
  DeleteUserAction,
  DeleteAllUserAction,
  CreateUserAddressAction,
  ImportUserAction,
  ExportUserAction,
} from '../action/user.action';

export class UserStateModel {
  user = {
    data: [] as IUser[],
    total: 0,
  };
  selectedUser: IUser | null;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    user: {
      data: [],
      total: 0,
    },
    selectedUser: null,
  },
})
@Injectable()
export class UserState {
  private store = inject(Store);
  private notificationService = inject(NotificationService);
  private userService = inject(UserService);

  @Selector()
  static user(state: UserStateModel) {
    return state.user;
  }

  @Selector()
  static users(state: UserStateModel) {
    return state.user.data.map(user => {
      return { label: user?.name, value: user?.id };
    });
  }

  @Selector()
  static selectedUser(state: UserStateModel) {
    return state.selectedUser;
  }

  @Action(GetUsersAction)
  getUsers(ctx: StateContext<UserStateModel>, action: GetUsersAction) {
    return this.userService.getUsers(action?.payload).pipe(
      tap({
        next: result => {
          ctx.patchState({
            user: {
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

  @Action(CreateUserAction)
  create(ctx: StateContext<UserStateModel>, action: CreateUserAction) {
    return this.userService.createUser({
      name: action.payload.name,
      email: action.payload.email,
      phone: String(action.payload.phone),
      password: action.payload.password || '',
      send_password_setup_email: !action.payload.password,
      role_id: action.payload.role_id || 2,
    }).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('User created successfully');
          this.store.dispatch(new GetUsersAction());
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to create user');
        },
      }),
    );
  }

  @Action(EditUserAction)
  edit(ctx: StateContext<UserStateModel>, { id }: EditUserAction) {
    return this.userService.getUsers().pipe(
      tap({
        next: results => {
          const state = ctx.getState();
          const result = results.data.find(user => user.id == id);
          ctx.patchState({
            ...state,
            selectedUser: result,
          });
        },
        error: err => {
          throw new Error(err?.error?.message);
        },
      }),
    );
  }

  @Action(UpdateUserAction)
  update(ctx: StateContext<UserStateModel>, { payload, id }: UpdateUserAction) {
    const user = ctx.getState().user.data.find(u => u.id === id);
    const phone = user?.phone || String(id);
    return this.userService.updateUser(phone, {
      name: payload.name,
      email: payload.email,
      phone: String(payload.phone),
      status: payload.status,
    }).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('User updated successfully');
          this.store.dispatch(new GetUsersAction());
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to update user');
        },
      }),
    );
  }

  @Action(UpdateUserStatusAction)
  updateStatus(
    ctx: StateContext<UserStateModel>,
    { id, status }: UpdateUserStatusAction,
  ) {
    const user = ctx.getState().user.data.find(u => u.id === id);
    const phone = user?.phone || String(id);
    return this.userService.updateUser(phone, { status }).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('User status updated');
          this.store.dispatch(new GetUsersAction());
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to update status');
        },
      }),
    );
  }

  @Action(DeleteUserAction)
  delete(ctx: StateContext<UserStateModel>, { id }: DeleteUserAction) {
    const user = ctx.getState().user.data.find(u => u.id === id);
    const phone = user?.phone || String(id);
    return this.userService.deleteUser(phone).pipe(
      tap({
        next: () => {
          this.notificationService.showSuccess('User deleted successfully');
          this.store.dispatch(new GetUsersAction());
        },
        error: err => {
          this.notificationService.showError(err?.error?.message || 'Failed to delete user');
        },
      }),
    );
  }

  @Action(DeleteAllUserAction)
  deleteAll(_ctx: StateContext<UserStateModel>, { ids: _ids }: DeleteAllUserAction) {
    // Delete All User Logic Here
  }

  @Action(ImportUserAction)
  import(_ctx: StateContext<UserStateModel>, _action: ImportUserAction) {
    // Import User Logic Here
  }

  @Action(ExportUserAction)
  export(_ctx: StateContext<UserStateModel>, _action: ExportUserAction) {
    // Export User Logic Here
  }

  @Action(CreateUserAddressAction)
  createUserAddress(_ctx: StateContext<UserStateModel>, _action: CreateUserAddressAction) {
    // Create User Address Logic Here
  }
}
