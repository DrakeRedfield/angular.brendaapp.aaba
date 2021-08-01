import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomePageRoutingModule } from './home-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomePageRoutingModule,
    ComponentsModule,
    CommonModule
  ]
})
export class HomeModule { }
