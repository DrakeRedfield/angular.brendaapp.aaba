import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductosComponent } from './list-productos/list-productos.component';
import { CardProductoComponent } from './card-producto/card-producto.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ListProductosComponent,
    CardProductoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    ListProductosComponent,
    CardProductoComponent
  ]
})
export class ProductosComponentsModule { }
