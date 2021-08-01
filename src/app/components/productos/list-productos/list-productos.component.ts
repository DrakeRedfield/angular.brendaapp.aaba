import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from '../../../interfaces/productos.interfaces';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.scss']
})
export class ListProductosComponent implements OnInit {

  @Input() dataProducts: IProducto[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
