import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../shared/interfaces/app-state";
import { LoginStateInterface } from "../types/loginStateInterface";

export const loginFeatureSelector = createFeatureSelector<
    LoginStateInterface
>('login')

export const isSubmittingSelector = createSelector(
    loginFeatureSelector,
    ( loginState: LoginStateInterface ) => loginState.isSubmitting
)