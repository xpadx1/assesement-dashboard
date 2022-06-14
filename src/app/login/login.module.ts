import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/store/reducers/login.reducer'
import { LoginComponent } from './login.component';
import * as fromLogin from 'src/app/store/reducers/login.reducer';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    FormsModule,
    NoopAnimationsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    StoreModule.forFeature('login', reducer)
  ],
  exports: [
    LoginComponent
  ],
  declarations: [LoginComponent]
})
export class LoginModule {}