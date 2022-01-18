import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivroFormComponent } from './livro-form/livro-form.component';
import { LivroDetalheComponent } from './livro-detalhe/livro-detalhe.component';
import { LivroComponent } from './livro.component';
import { LoginGuard } from '../guards/login.guard';

const livroRoutes: Routes = [
  {path: 'livros', component: LivroComponent, canActivate: [LoginGuard]},
  {path: 'livros/:id', component: LivroDetalheComponent, canActivate: [LoginGuard]},
  {path: 'novo', component: LivroFormComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(livroRoutes)],
  exports: [RouterModule]
})
export class LivroRoutingModule { }
