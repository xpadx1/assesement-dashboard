import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router
  ) { }

  logout() {
    this.isUser = false; 
    this.isAdmin = false;
    this.setToken(null);
    this.router.navigate(['/login']);
  }

  isAuthorized(): boolean {
    if (this.isUser || this.isAdmin) {
      return true;
    }
    return false;
  }

  setToken(res: ResponseLoginInterface | null) {
    if (!res) {
      localStorage.clear();
      return;
    }
    const tokenDate = new Date().getTime();
    localStorage.setItem('tokenSetDate', tokenDate.toString());
    localStorage.setItem('userType', res.role);
    localStorage.setItem('X-Token', res.token);
    this.xToken = res.token;
  }

  getUserLocalData() {
    const xToken = localStorage.getItem('X-Token');
    const userType = localStorage.getItem('userType');

    if (xToken && userType === 'User') {
      this.isUser = true;
      this.xToken = xToken;
      this.router.navigate(['/dashboard']);
      return;
    }
    else if (xToken && userType === 'Admin') {
      this.isAdmin = true;
      this.xToken = xToken;
      this.router.navigate(['/dashboard']);
      return;
    }
    else {
      return;
    }
  }
}
