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

  closeNavbar(){
    this.opened = false;
  }

  // get openedNav(): boolean{
  //   return this.opened;
  // }

}
