import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  opened: boolean = false;

  constructor() { }

  openCloseNavbar(){
    this.opened = !this.opened;
  }

  // get openedNav(): boolean{
  //   return this.opened;
  // }

}
