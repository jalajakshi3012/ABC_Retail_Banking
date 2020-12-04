import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenaccountComponent } from './openaccount/openaccount.component';
import {LogoutComponent} from './logout/logout.component';
import { OneComponent } from './main/layouts/one/one.component';
import { SavingaccountComponent } from './openaccount/savingaccount/savingaccount.component';
import { DashboardheaderComponent } from './main/layouts/dashboardheader/dashboardheader.component';

const routes: Routes = [
  {path: 'register/mainpage', component:DashboardheaderComponent},
  {path: 'register/mainpage/openaccount', component:OpenaccountComponent},
  {path: '', component: OneComponent}
  //{path: 'register/openaccount/saveacc', component:SavingaccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
