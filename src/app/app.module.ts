import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewexpComponent } from './newexp/newexp.component';
import { ExpmanComponent } from './expman/expman.component';

@NgModule({
  declarations: [
    AppComponent,
    NewexpComponent,
    ExpmanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
