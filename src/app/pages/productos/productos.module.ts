import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { RoutingProductosPageModule } from './productos-rounting.module';



@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    RoutingProductosPageModule,
    CommonModule
  ]
})
export class ProductosModule { }