import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './layouts/one/one.component';
import { HeaderComponent } from './layouts/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OneComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
   OneComponent
  ]
})
export class MainModule { }
