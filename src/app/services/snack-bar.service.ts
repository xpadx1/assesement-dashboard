import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  openSuccessSnackBar() {
    this.snackBar.open('Success!', undefined, {
      duration: 4000,
      panelClass: ['green-snackbar']
    });
  }

  openFailureSnackbar() {
    this.snackBar.open('Failure', undefined, {
      duration: 4000,
      panelClass: ['red-snackbar']
    });
  }
}
