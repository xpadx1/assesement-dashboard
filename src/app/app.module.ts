import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { UsersListComponent } from './users-list/users-list.component';
import { MatTableModule } from '@angular/material/table';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { ChartComponent } from './chart/chart.component';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    NavLinksComponent,
    UsersListComponent,
    ChartComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    MatProgressSpinnerModule,
    NoopAnimationsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgxChartsModule
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
