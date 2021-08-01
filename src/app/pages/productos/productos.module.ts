import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { RoutingProductosPageModule } from './productos-rounting.module';
import { ComponentsModule } from '../../components/components.module';
import { MatCardModule } from '@angular/material/card';
import { ProductosComponentsModule } from '../../components/productos/productos.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    RoutingProductosPageModule,
    ProductosComponentsModule,
    ComponentsModule,
    MatCardModule,
    CommonModule,
    FormsModule
  ]
})
export class ProductosModule { }
