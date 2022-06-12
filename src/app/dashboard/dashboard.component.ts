import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from '../enums/request';
import { ChartInterface } from '../interfaces/chart';
import { AdminPostInterface, PostInterface } from '../interfaces/post';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  posts: PostInterface[];

  loading = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private chartService: ChartService
  ) { }

  ngOnInit(): void {
      this.getData(Request.assessments);
  }

  getData(req: string) {
    this.loading = true;
    this.apiService.get<[]>(req)
      .subscribe(res => {
        this.loading = false;
        this.posts = res;
      })
  }

  openGraph(id: number, name: string) {
    this.chartService.chartTitle = name;
    this.apiService.get<ChartInterface>(Request.graph, id)
      .subscribe(res => {
        this.chartService.chartData.next(res);
      })
  }

}
