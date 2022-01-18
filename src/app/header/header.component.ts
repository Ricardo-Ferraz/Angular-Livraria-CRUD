import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoginService } from './../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  title: string= 'Livraria';
  usuarioNome: string= '';

  mostrarMenu: boolean= false;
  inscricao= new Subscription();

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
   this.inscricao= this.loginService.getEmitter().subscribe(
     mostrar => {this.mostrarMenu= mostrar; this.usuarioNome= this.loginService.getUsuarioLogado()}
   )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
