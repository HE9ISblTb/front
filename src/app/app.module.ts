import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AutorizationComponent } from './components/autorization/autorization/autorization.component';

@NgModule({
  declarations: [
    AppComponent,
    AutorizationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
