import { Livro } from '../models/livro';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly API= `${environment.API}livros`

  constructor(private http: HttpClient) { }

  getOne(id: number){
    return this.http.get<Livro>(`${this.API}/${id}`).pipe();
  }

  getAll(){
    return this.http.get<Livro[]>(this.API).pipe();
  }

  create(livro: Livro){
    return this.http.post(this.API, livro).pipe(take(1))
  }
}
