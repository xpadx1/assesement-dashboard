import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from '../enums/request';
import { AdminPostInterface, PostInterface } from '../interfaces/post';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  posts: PostInterface[];
  adminPosts: AdminPostInterface[];

  userType: string;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.authService.isUser) {
      this.userType = "User"
      this.getData();
    }

    else if (this.authService.isAdmin) {
      this.userType = "Admin"
      this.getData();
      this.getAdminData();
    }
  }

  getData() {
    this.apiService.get<[]>(Request.assessments)
      .subscribe(res => {
        this.posts = res;
      })
  }

  getAdminData() {
    this.apiService.get<[]>(Request.users)
      .subscribe(res => {
        this.adminPosts = res;
      })
  }

  openGraph(id: number) {
    this.apiService.get<[]>(Request.graph, id)
      .subscribe(res => {
        console.log(res)
      })
  }

}
