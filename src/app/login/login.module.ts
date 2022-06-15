import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/store/reducers/login.reducer'
import { LoginComponent } from './components/login.component';
import * as fromLogin from 'src/app/store/reducers/login.reducer';
import { AppRoutingModule } from '../app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from '../store/effects/login.effect';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    FormsModule,
    NoopAnimationsModule,
    MatSnackBarModule,
    StoreModule.forFeature('login', reducer),
    EffectsModule.forFeature([LoginEffect])
  ],
  exports: [
    LoginComponent
  ],
  declarations: [LoginComponent]
})
export class LoginModule {}