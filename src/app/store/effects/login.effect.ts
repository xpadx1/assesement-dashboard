import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { ApiService } from "src/app/shared/services/api.service";
import { loginAction, loginFailureAction, loginSuccessAction } from "../actions/login.action";

@Injectable()

export class LoginEffect {
    login$ = createEffect(() => this.actions$.pipe(
        ofType(loginAction),
        switchMap(({data}) => {
            console.log(data)
            return this.apiService.postLogin(data).pipe(
                map((currentUser: any) => {
                    return loginSuccessAction({currentUser})
                }),
                catchError(() => {
                    return of(loginFailureAction())
                })
            )
        })
    ))

    constructor(
        private actions$: Actions,
        private apiService: ApiService
        ) {}
}