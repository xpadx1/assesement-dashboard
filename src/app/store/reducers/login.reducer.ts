import { Action, createReducer, on } from "@ngrx/store";
import { loginAction } from "../actions/login.action";
import { LoginStateInterface } from "../types/loginStateInterface";

const initialLoginState: LoginStateInterface = {
    isSubmitting: false
}

const initialUserTypeState = {
    userType: ''
}

const loginReducer = createReducer(
    initialLoginState,
    on(
        loginAction, 
        (state): LoginStateInterface => 
        ({ 
            ...state, 
            isSubmitting: true
        })
    )
);

// const userTypeReducer = createReducer(
//     initialUserTypeState,
//     on(
//         userTypeAction,
//         state => ({
//             ...state,
//             userType:
//         })
//     )
// )
  
export function reducer(state: LoginStateInterface, action: Action) {
    return loginReducer(state, action);
}