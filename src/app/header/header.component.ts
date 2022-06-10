import { AfterViewChecked, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {

  isAuthorized = false;

  constructor(
    private authService: AuthService
  ) { }

  ngDoCheck(): void {
    this.isAuthorized = this.authService.isAuthorized();
  }

  logout() {
    this.isAuthorized = false
    this.authService.logout();
  }

}
