import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard-components/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { NavLinksComponent } from './shared/nav-links/nav-links.component';
import { UsersListComponent } from './dashboard/users-list/users-list.component';
import { MatTableModule } from '@angular/material/table';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { ChartComponent } from './dashboard/chart/chart.component';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './store/reducers/login.reducer';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EffectsModule, EffectsRootModule } from '@ngrx/effects';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavLinksComponent,
    ChartComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    MatProgressSpinnerModule,
    FormsModule,
    DashboardModule,
    NgxChartsModule,
    EffectsModule.forRoot([]),
    LoginModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
