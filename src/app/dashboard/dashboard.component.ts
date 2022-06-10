import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.authService.isUser) {
      this.getData();
    }
  }

  getData() {
    this.apiService.get('api/userassessments', this.authService.xToken)
      .subscribe(res => {
        console.log(res);
      })
  }

  getAdminData() {
    this.apiService.get('api/users', this.authService.xToken)
      .subscribe(res => {
        console.log(res);
      })
  }

}
