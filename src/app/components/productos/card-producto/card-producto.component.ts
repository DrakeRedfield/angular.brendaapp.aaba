import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from '../../../interfaces/productos.interfaces';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.scss']
})
export class CardProductoComponent implements OnInit {

  @Input() isNewCard: boolean = false;
  @Input() data: IProducto = { nombre: ''};

  constructor() { }
  

  ngOnInit(): void {
  }

}
