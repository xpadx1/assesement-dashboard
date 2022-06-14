import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../types/actionTypes";

export const loginAction = createAction(
    ActionTypes.LOGIN,
    props<{email: string; password: string}>()
)