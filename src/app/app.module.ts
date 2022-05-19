import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {AutorizationComponent} from './components/autorization/autorization.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

import {AutorizationService} from './services/autorization/autorization-service';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {AnimalsService} from "./services/animals/animals-service";
import {AnimalsComponent} from './components/animals/animals.component';

const appRoutes: Routes = [
  {path: '', component: AutorizationComponent},
  {path: 'animals', component: AnimalsComponent},
  {path: '**', component: NotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AutorizationComponent,
    NotFoundComponent,
    NavbarComponent,
    AnimalsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AutorizationService, AnimalsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
