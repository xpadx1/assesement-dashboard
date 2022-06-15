import { createAction, props } from "@ngrx/store";
import { LoginInterface } from "src/app/shared/interfaces/login-interface";
import { ResponseLoginInterface } from "src/app/shared/interfaces/response-login";
import { ActionTypes } from "../types/actionTypes";


export const loginAction = createAction(
    ActionTypes.LOGIN,
    props<{data: LoginInterface}>()
)

export const loginSuccessAction = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{currentUser: ResponseLoginInterface}>()
)

export const loginFailureAction = createAction(
    ActionTypes.LOGIN_FAILURE
)