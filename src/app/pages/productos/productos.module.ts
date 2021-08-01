import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { RoutingProductosPageModule } from './productos-rounting.module';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    RoutingProductosPageModule,
    ComponentsModule,
    CommonModule
  ]
})
export class ProductosModule { }
