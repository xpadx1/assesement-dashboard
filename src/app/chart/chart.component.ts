import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChartInterface } from '../shared/interfaces/chart';
import { ChartService } from '../shared/services/chart.service';
import { SnackBarService } from '../shared/services/snack-bar.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnDestroy {

  graphData: any[];
  chartTitle: string;
  loading = false;

  constructor(
    private chartService: ChartService,
    private snackBarService: SnackBarService
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getChartData();
    this.getChartTitle();
  }

  ngOnDestroy(): void {
    this.chartService.chartData.next();
  }

  getChartData() {
    this.loading = true;
    this.chartService.chartData.subscribe(res => {
      let result = [];
      for(let prop in res.data) {
        let obj = { name: prop, value: res.data[prop as keyof typeof res.data] }
        result.push(obj)
      }
      this.snackBarService.openSuccessSnackBar();
      this.loading = false;
      this.graphData = result;
    })
  }

  getChartTitle() {
    this.chartTitle = this.chartService.chartTitle
  }
  

}
