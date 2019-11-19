import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule } from '@angular/router';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MovieListComponent,
    AboutusComponent,
    NotfoundComponent
   

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path: 'movie-list', component: MovieListComponent},
        {path: 'aboutus', component: AboutusComponent},
        {path: '', component: MovieListComponent},
        //{path: '**', component: NotfoundComponent},
        {path: 'register', component: RegisterComponent}


      ]
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
