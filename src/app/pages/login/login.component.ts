import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any;

  constructor(
    private routes: Router,
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(formLogin: any){
    if( formLogin.invalid ){
      return;
    }
    this.routes.navigate(['/home/'],{replaceUrl: true})
  }

}
