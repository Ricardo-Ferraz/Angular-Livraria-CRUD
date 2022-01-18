import { LivroService } from './../services/livro.service';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of, Subject } from 'rxjs';
import { Livro } from '../models/livro';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent implements OnInit {

  livros$: Observable<Livro[]>= new Observable<Livro[]>();
  error$= new Subject<boolean>();

  constructor(private livroSrevice: LivroService) {
  }

  ngOnInit(): void {
    this.livros$= this.livroSrevice.getAll().pipe(
      catchError(error => {
        this.error$.next(true);
        return of();
      })
    );
  }

  onClick(){

  }
}
