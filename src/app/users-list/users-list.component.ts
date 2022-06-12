import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { Request } from '../enums/request';
import { ApiService } from '../services/api.service';
import { AngularCsv } from 'angular-csv-ext/dist/Angular-csv';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true, 
    showTitle: true,
    title: [],
    useBom: true,
    noDownload: false,
    headers: ['first_name', 'last_name', 'email', 'groups'],
    useHeader: true,
    nullToEmptyString: true,
  };

  loading = false;
  list: string[];

  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'groups', 'csv'];

  constructor(
    private apiService: ApiService
    ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.apiService.get<[]>(Request.users)
      .subscribe(res => {
        this.loading = false;
        this.list = res;
      })
  }

  test() {
    console.log(this.list)
  }

  downloadCsv(el: any) {
    new  AngularCsv([el], `${el.first_name} data`, this.csvOptions);
  }

}
