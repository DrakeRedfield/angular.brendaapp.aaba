import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(formLogin: any){
    if( formLogin.invalid ){
      return;
    }
  }

}