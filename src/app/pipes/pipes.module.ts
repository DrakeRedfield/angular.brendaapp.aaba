import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlimagePipe } from './urlimage.pipe';



@NgModule({
  declarations: [
    UrlimagePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UrlimagePipe
  ]
})
export class PipesModule { }
