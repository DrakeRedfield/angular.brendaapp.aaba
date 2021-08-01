import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomePageRoutingModule } from './home-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ComponentsModule,
    MatCardModule,
    CommonModule,
    HomePageRoutingModule,
  ]
})
export class HomeModule { }
