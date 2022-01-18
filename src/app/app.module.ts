import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { LivroModule } from './livro/livro.module';
import { LoginModule } from './login/login.module';

import { LivroService } from './services/livro.service';
import { LoginService } from './services/login.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LivroModule,
    LoginModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    LivroService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
