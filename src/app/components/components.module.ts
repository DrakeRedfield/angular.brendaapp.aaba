import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HeaderComponent } from './header/header.component';
import { PhrasesEmotionalComponent } from './phrases-emotional/phrases-emotional.component';



@NgModule({
  declarations: [
    SidemenuComponent,
    HeaderComponent,
    PhrasesEmotionalComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SidemenuComponent,
    HeaderComponent,
    PhrasesEmotionalComponent
  ]
})
export class ComponentsModule { }
