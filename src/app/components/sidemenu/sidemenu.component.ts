import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar/navbar.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  constructor(
    private router: Router,
    private navbar: NavbarService,
  ) { }

  ngOnInit(): void {
  }

  closeSesion(){
    this.router.navigateByUrl('/',{replaceUrl: true});
    this.navbar.closeNavbar();
  }

}
