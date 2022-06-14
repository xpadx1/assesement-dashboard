import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { LoginComponent } from "./login/components/login.component";
import { DashboardComponent } from "./dashboard/dashboard-components/dashboard.component";
import { AuthGuard } from "./shared/guards/auth.guard";
import { UsersListComponent } from "./dashboard/users-list/users-list.component";
import { ChartComponent } from "./dashboard/chart/chart.component";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'users', component: UsersListComponent,  canActivate: [AuthGuard] },
    { path: 'dashboard/:id', component: ChartComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}