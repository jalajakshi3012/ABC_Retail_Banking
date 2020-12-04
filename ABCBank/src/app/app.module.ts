import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { OpenaccountComponent } from './openaccount/openaccount.component';
import { SavingaccountComponent } from './openaccount/savingaccount/savingaccount.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardheaderComponent } from './main/layouts/dashboardheader/dashboardheader.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenaccountComponent,
    SavingaccountComponent,
    LogoutComponent,
DashboardheaderComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
