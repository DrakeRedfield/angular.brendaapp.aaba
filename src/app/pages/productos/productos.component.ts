import { Component, OnInit } from '@angular/core';
import { IProducto } from '../../interfaces/productos.interfaces';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { productos } from 'src/app/utils/data/data.productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  allData: IProducto[] = productos;
  activeProducts: IProducto[] = [];
  textSearch: string = '';
  debouncer: Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(500))
    .subscribe( value => {
      this.filterByName()
    });
    this.activeProducts = this.allData.slice(0,10);
  }

  filterByName(){
    const textToSearch = this.textSearch.toLowerCase()
    if(textToSearch == ''){
      this.activeProducts = this.allData.splice(0,10);
      console.log(this.activeProducts);
      return;
    }
    this.activeProducts = this.allData.filter(el => el.nombre.toLowerCase().includes(textToSearch));
    console.log(this.activeProducts);
  }

  keyPress(){
    this.debouncer.next( this.textSearch );
  }
}
