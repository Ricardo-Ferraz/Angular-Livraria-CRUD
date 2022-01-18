import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { LivroService } from './../../services/livro.service';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.scss']
})
export class LivroFormComponent implements OnInit {

  form: FormGroup;
  error: boolean= false;
  success: boolean= false;

  constructor(private fb: FormBuilder,
    private livroService: LivroService,
    private router: Router) {
    this.form= this.fb.group({
      titulo: [null, [Validators.required]],
      autor: [null, [Validators.required]],
      descricaoBreve: [null],
      descricao: [null, [Validators.required]],
      categoria: [null, [Validators.required]],
      qtdVendas: [null],
      preco: [null, [Validators.required]],
      urlImagem: [null, [Validators.required]]
    })
  }

  hasErrors(field: string){
    return this.form.get(field)?.errors;
  }

  onSubmit(){
    if(this.form.valid){
      this.livroService.create(this.form.value).subscribe({
        next: (v) => {console.log(v, 'Sucesso'); this.success= true; this.error= false},
        error: (e) => {console.error(e); this.error=true; this.success= false;},
        complete: () => console.info('complete')
      });
    }
  }

  onCancel(){
    this.router.navigate(['', 'livros'])
  }

  ngOnInit(): void {

  }
}
