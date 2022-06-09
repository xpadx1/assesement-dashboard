import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {catchError, delay } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public get<T>(url: string, xToken: string) {
    // if (!xToken) {
    //   return;
    // }
    const requestUrl = `${environment.url}r/${url}?X-Token=${xToken}` 
    return this.http.get<T>(requestUrl)
      .pipe(delay(500));
  }

  public post<T>(url: string, body: any) {
    const requestUrl = `${environment.url}/${url}`;
    return this.http.post<T>(requestUrl, body)
      .pipe(
        catchError(error => {
          return throwError(error.message)
        })
      );
  }
}
