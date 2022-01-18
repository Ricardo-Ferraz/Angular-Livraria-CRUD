import { Usuario } from './../models/usuario';
import { EventEmitter, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { delay, take } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API= `${environment.API}usuarios`;
  private usuarios: Usuario[]=[];

  private usuarioLogado: string= '';

  private isAutenticado: boolean= false;

  private menuEmitter= new EventEmitter<boolean>();

  constructor(private http: HttpClient,
    private router: Router) {
    this.http.get(this.API).pipe(
      delay(1000)
    ).subscribe((element: any ) => {
      element.forEach((unic: Usuario) => {
        this.usuarios.push(unic)
      });
    })
  }

  doRefresh(){
    var usuarios: Usuario[]=[];
    this.http.get(this.API).pipe(
      delay(1000)
    ).subscribe((element: any ) => {
      element.forEach((unic: Usuario) => {
        usuarios.push(unic)
      });
    })
    this.usuarios= usuarios;
  }

  isLoginEquals(login: string){
    for(let i=0; i < this.usuarios.length; i++){
      if(this.usuarios[i].login == login){
        return true;
      }
    }
    return false;
  }

  create(login: string, senha: string){
    return this.http.post(this.API, {login, senha}).pipe(take(1));
  }

  validaLogin(login: string, senha: string): boolean{
    this.usuarios.forEach(usuario => {
      if(usuario.login === login && usuario.senha === senha){
        this.isAutenticado= true;
        this.usuarioLogado= usuario.login;
        this.menuEmitter.emit(true)
        this.router.navigate(['livros']);
      }
    });

    return false;
  }

  estaAutenticado(){
    return this.isAutenticado;
  }

  getUsuarios(){
    return this.usuarios;
  }

  getUsuarioLogado(){
    return this.usuarioLogado;
  }

  getEmitter(){
    return this.menuEmitter;
  }
}
