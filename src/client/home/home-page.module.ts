import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home-page';
import { HomePageRoutingModule } from './home-page.routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomePageModule { }