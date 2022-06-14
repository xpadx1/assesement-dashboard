import { Action, createReducer, on } from "@ngrx/store";
import { loginAction } from "../actions/login.action";
import { LoginStateInterface } from "../types/loginStateInterface";

const initialState: LoginStateInterface = {
    isSubmitting: false
}

const loginReducer = createReducer(
    initialState,
    on(
        loginAction, 
        (state): LoginStateInterface => 
        ({ 
            ...state, 
            isSubmitting: true
        })
    )
);
  
export function reducer(state: LoginStateInterface, action: Action) {
    return loginReducer(state, action);
}