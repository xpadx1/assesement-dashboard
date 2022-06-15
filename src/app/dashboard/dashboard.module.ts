import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
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