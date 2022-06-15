import { ResponseLoginInterface } from "src/app/shared/interfaces/response-login"

export interface LoginStateInterface {
    isSubmitting: boolean
    isLoggedIn: boolean
    currentUser: ResponseLoginInterface | null

}