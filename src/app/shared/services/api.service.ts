import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {catchError, delay } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { Request } from '../enums/request';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public get<T>(url: string, id?: number) {
    let requestUrl;
    if (id) {
      requestUrl = `${environment.url}/${url}?id=${id}` 
    }
    else {
      requestUrl = `${environment.url}/${url}` 
    }

    return this.http.get<T>(requestUrl)
      .pipe(delay(500));
  }

  public postLogin<T>(body: any) {
    const requestUrl = `${environment.url}/${Request.login}`;
    return this.http.post<T>(requestUrl, body)
      .pipe(
        catchError(error => {
          return throwError(error.message)
        })
      );
  }
}
