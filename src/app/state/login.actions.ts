import {createAction, props} from "@ngrx/store";

export const login = createAction(
  '[Login Component] Login',
  props<{ isLoggedIn: boolean }>()
);

export const logout = createAction(
  '[Login Component] Logout',
  props<{ isLoggedIn: boolean }>
);
