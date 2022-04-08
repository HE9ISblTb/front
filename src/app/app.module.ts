import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AutorizationComponent } from './components/autorization/autorization.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AutorizationService } from './services/autorization/autorization-service';

const appRoutes: Routes = [
  {path: 'autorization', component: AutorizationComponent},
  {path: '**', component: NotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AutorizationComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AutorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
