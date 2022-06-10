import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInterface } from '../interfaces/login-interface';
import { ResponseLoginInterface } from '../interfaces/response-login';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  error = false;
  loading = false;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router,
    private snackBarService: SnackBarService
    ) {}

  ngOnInit(): void {
    this.authService.getUserLocalData();
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ])
    })
  }

  submit() {
    this.loading = true;
    const bodyData: LoginInterface = this.form.value;
    this.apiService.post<ResponseLoginInterface>('api/login', bodyData)
      .subscribe(res => {
        this.authService.authData = res;
        this.authService.setToken(res);
        this.error = false;
        this.loading = false;
        this.snackBarService.openSuccessSnackBar();
        if (res.role === 'User') {
          this.authService.isUser = true;
          this.router.navigate(['/dashboard']);
          return;
        }
        else if (res.role = 'Admin') {
          this.router.navigate(['/dashboard']);
          this.authService.isAdmin = true;
          return;
        }
      }, error => {
        this.snackBarService.openFailureSnackbar();
        this.loading = false;
        this.error = true;
      })
  }


}


