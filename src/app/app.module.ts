import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { OneComponent } from './pages/one/one.component';
import { NextButtonComponent } from './components/next-button/next-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OneComponent,
    NextButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
