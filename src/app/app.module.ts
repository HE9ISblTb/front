import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {AutorizationComponent} from './components/autorization/autorization.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

import {appService} from "./services/app-service";
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
import {OwnersAnimalsService} from "./services/owners-animals/owners-animals-service";
import {AddAnimalsComponent} from './components/animals/add-animals/add-animals.component';
import {EditAnimalsComponent} from './components/animals/edit-animals/edit-animals.component';
import {AddResponsibleComponent} from './components/responsible/add-responsible/add-responsible.component';
import {DeleteAnimalsComponent} from './components/animals/delete-animals/delete-animals.component';
import {DeleteResponsibleComponent} from './components/responsible/delete-responsible/delete-responsible.component';
import {EditResponsibleComponent} from './components/responsible/edit-responsible/edit-responsible.component';
import {AddContentItemsComponent} from './components/content-items/add-content-items/add-content-items.component';
import {EditContentItemsComponent} from './components/content-items/edit-content-items/edit-content-items.component';
import {DeleteContentItemsComponent} from './components/content-items/delete-content-items/delete-content-items.component';
import {AddOwnersAnimalsComponent} from './components/owners-animals/add-owners-animals/add-owners-animals.component';
import {DeleteOwnersAnimalsComponent} from './components/owners-animals/delete-owners-animals/delete-owners-animals.component';
import {EditOwnersAnimalsComponent} from './components/owners-animals/edit-owners-animals/edit-owners-animals.component';
import {FullAnimalsComponent} from './components/animals/full-animals/full-animals.component';
import {AttachedAnimalsComponent} from './components/animals/attached-animals/attached-animals.component';

const appRoutes: Routes = [
  {path: '', component: AutorizationComponent},
  {path: 'animals', component: AnimalsComponent},
  {path: 'attached-animals', component: AttachedAnimalsComponent},
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
    DeleteAnimalsComponent,
    AddResponsibleComponent,
    DeleteResponsibleComponent,
    EditResponsibleComponent,
    AddContentItemsComponent,
    EditContentItemsComponent,
    DeleteContentItemsComponent,
    AddOwnersAnimalsComponent,
    DeleteOwnersAnimalsComponent,
    EditOwnersAnimalsComponent,
    FullAnimalsComponent,
    AttachedAnimalsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AutorizationService, AnimalsService, ResponsibleService, ContentItemsService, OwnersAnimalsService, appService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
