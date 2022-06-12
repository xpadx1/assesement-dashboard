import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ChartInterface } from '../interfaces/chart';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  chartData = new Subject<ChartInterface>();
  chartTitle: string;

  constructor() { }
}
