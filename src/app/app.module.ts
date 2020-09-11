import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { FooterAreaComponent } from './footer-area/footer-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainAreaComponent,
    FooterAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
