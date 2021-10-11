import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListpersonnesComponent } from './listpersonnes/listpersonnes.component';
import { PersonneComponent } from './personne/personne.component';
import { LapersonneComponent } from './lapersonne/lapersonne.component';

@NgModule({
  declarations: [
    AppComponent,
    ListpersonnesComponent,
    PersonneComponent,
    LapersonneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
