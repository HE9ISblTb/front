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
import {TableUiComponent} from './components/shared/table-ui/table-ui.component';
import {ResponsibleComponent} from './components/responsible/responsible.component';
import {ResponsibleService} from "./services/responsible/responsible-service";
import {ContentItemsComponent} from './components/content-items/content-items.component';
import {ContentItemsService} from "./services/content-items/content-items-service";
import {OwnersAnimalsComponent} from './components/owners-animals/owners-animals.component';
import {OwnersAnimalsService} from "./services/owners-animals-service/owners-animals-service";
import {AddAnimalsComponent} from './components/animals/add-animals/add-animals.component';
import {EditAnimalsComponent} from './components/animals/edit-animals/edit-animals.component';
import { AddResponsibleComponent } from './components/responsible/add-responsible/add-responsible.component';
import { DeleteAnimalsComponent } from './components/animals/delete-animals/delete-animals.component';

const appRoutes: Routes = [
  {path: '', component: AutorizationComponent},
  {path: 'animals', component: AnimalsComponent},
  {path: 'add-animals', component: AddAnimalsComponent},
  {path: 'edit-animals', component: EditAnimalsComponent},
  {path: 'delete-animals', component: DeleteAnimalsComponent},
  {path: 'responsible', component: ResponsibleComponent},
  {path: 'content', component: ContentItemsComponent},
  {path: 'owners', component: OwnersAnimalsComponent},
  {path: '**', component: NotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AutorizationComponent,
    NotFoundComponent,
    NavbarComponent,
    AnimalsComponent,
    TableUiComponent,
    ResponsibleComponent,
    ContentItemsComponent,
    OwnersAnimalsComponent,
    AddAnimalsComponent,
    EditAnimalsComponent,
    AddResponsibleComponent,
    DeleteAnimalsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AutorizationService, AnimalsService, ResponsibleService, ContentItemsService, OwnersAnimalsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
