import { Component, DoCheck } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {

  isAuthorized = false;
  userType: string;

  constructor(
    private authService: AuthService
  ) { }

  ngDoCheck(): void {
    this.isAuthorized = this.authService.isAuthorized();
    this.getUsertype();
  }

  logout() {
    this.userType = ''
    this.isAuthorized = false
    this.authService.logout();
  }

  getUsertype() {
    if (this.authService.isUser) {
      this.userType = "User";
      return;
    }
    else if ( this.authService.isAdmin ) {
      this.userType = "Admin";
      return
    }
  }

}
