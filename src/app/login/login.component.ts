import { Component, OnInit } from '@angular/core';

import { LoginService } from './../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string= '';
  senha: string= '';
  error: boolean= false;

  constructor(private loginService: LoginService) {

  }

  ngOnInit(): void {
  }

  doLogin(){
    if((this.login.trim() != '') && (this.senha.trim() != '')){
      if(!this.loginService.validaLogin(this.login.trim(), this.senha.trim())){
        this.error= true;
      }
    }
    this.error= true;
  }
}
