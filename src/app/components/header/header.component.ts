import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar/navbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private navbar: NavbarService
  ) { }

  ngOnInit(): void {
  }

  openCloseNav(){
    this.navbar.openCloseNavbar();
  }

}
