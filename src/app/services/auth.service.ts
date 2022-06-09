import { Injectable } from '@angular/core';
import { ResponseLoginInterface } from '../interfaces/response-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentRoute: string;

  xToken: string;
  authData: ResponseLoginInterface;

  isUser = false;
  isAdmin = false;

  constructor() { }
}
