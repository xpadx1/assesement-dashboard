import { Action, createReducer, on } from "@ngrx/store";
import { loginAction, loginFailureAction, loginSuccessAction } from "../actions/login.action";
import { LoginStateInterface } from "../types/loginStateInterface";

const initialLoginState: LoginStateInterface = {
    isSubmitting: false,
    isLoggedIn: false,
    currentUser: null
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
    ),
    on(
        loginSuccessAction, 
        (state, action): LoginStateInterface => 
        ({ 
            ...state, 
            isSubmitting: false,
            isLoggedIn: true,
            currentUser: action.currentUser
        })
    ),
    on(
        loginFailureAction, 
        (state): LoginStateInterface => 
        ({ 
            ...state, 
            isSubmitting: false,
            isLoggedIn: false
        })
    )
);

export function reducer(state: LoginStateInterface, action: Action) {
    return loginReducer(state, action);
}