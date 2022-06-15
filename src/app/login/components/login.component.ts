import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInterface } from '../../shared/interfaces/login-interface';
import { ResponseLoginInterface } from '../../shared/interfaces/response-login';
import { AuthService } from '../../shared/services/auth.service';
import { SnackBarService } from '../../shared/services/snack-bar.service';
import { Request } from '../../shared/enums/request';
import { select, Store } from '@ngrx/store';
import { loginAction } from '../../store/actions/login.action';
import { Observable } from 'rxjs';
import { isSubmittingSelector } from '../../store/selectors/login.selector';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  isSubmitting$: Observable<boolean>
  error = false;
  loading = false;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router,
    private snackBarService: SnackBarService,
    private store: Store
    ) {}

  ngOnInit(): void {
    this.authService.getUserLocalData();
    this.initializeValues();
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

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))  
  }

  submit() {
    this.loading = true;
    const bodyData: LoginInterface = this.form.value;
    const request = {
      data: this.form.value
    }
    this.store.dispatch(loginAction(request));
    this.apiService.postLogin<ResponseLoginInterface>(bodyData)
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


