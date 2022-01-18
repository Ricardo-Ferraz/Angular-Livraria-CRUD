import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  login: string= '';
  senha: string= '';
  error: boolean= false;
  success: boolean= false;

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {

  }

  returnToLogin(){
    this.router.navigate(['']);
  }

  doRegistro(){
    if((this.login.trim() != '') && (this.senha.trim() != '') && !this.loginService.isLoginEquals(this.login)){
      this.loginService.create(this.login, this.senha).subscribe({
        next: (v) => {this.success=true; this.error= false; this.loginService.doRefresh();},
        error: (e) => this.error= true,
        complete: () => console.log('Completo')
      });
    }
    this.error= true;
    console.log(this.loginService.getUsuarios())
  }

}
