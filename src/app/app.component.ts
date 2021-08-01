import { Component } from '@angular/core';
import { NavbarService } from './services/navbar/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  openedNavbar = true;

  constructor(
    public navbar: NavbarService
  ){}

  openCloseNavbar(){
    this.navbar.openCloseNavbar();
  }
}
