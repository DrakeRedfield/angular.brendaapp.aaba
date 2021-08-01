import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    SidemenuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SidemenuComponent,
    HeaderComponent
  ],
  exports: [
    SidemenuComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }