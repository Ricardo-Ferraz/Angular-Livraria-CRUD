import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LivroDetalheComponent } from './livro-detalhe/livro-detalhe.component';
import { LivroFormComponent } from './livro-form/livro-form.component';
import { LivroComponent } from './livro.component';
import { LivroRoutingModule } from './livro.routing.module';



@NgModule({
  declarations: [
    LivroComponent,
    LivroDetalheComponent,
    LivroFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LivroRoutingModule
  ]
})
export class LivroModule { }
