import { LivroService } from './../../services/livro.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from 'src/app/models/livro';
import {  Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-livro-detalhe',
  templateUrl: './livro-detalhe.component.html',
  styleUrls: ['./livro-detalhe.component.scss']
})
export class LivroDetalheComponent implements OnInit, OnDestroy {

  inscricao = new Subscription();
  livro$: Observable<Livro>= new Observable<Livro>();

  constructor(private livroService: LivroService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.inscricao= this.route.params.subscribe((params: any) => {
      let id= params['id'];

      this.livro$= this.livroService.getOne(id);
      console.log(this.livro$)
    })
  }

  backToList(){
    this.router.navigate(['livros'])
  }

  ngOnDestroy(): void {
      this.inscricao.unsubscribe();
  }
}
