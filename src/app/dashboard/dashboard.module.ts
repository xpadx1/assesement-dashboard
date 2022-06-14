import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { ChartComponent, NgxChartsModule } from '@swimlane/ngx-charts';
import { reducer } from 'src/app/store/reducers/login.reducer';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './dashboard-components/dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    FormsModule,
    NoopAnimationsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgxChartsModule,

  ],
  exports: [
    DashboardComponent
  ],
  declarations: [
    DashboardComponent,
    UsersListComponent,
  ]
})
export class DashboardModule {}