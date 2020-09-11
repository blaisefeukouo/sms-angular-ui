import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { FooterAreaComponent } from './footer-area/footer-area.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainAreaComponent,
    FooterAreaComponent,
    StudentsComponent,
    DashboardComponent,
    StudentDetailComponent,
    StudentAddComponent,
    HeroFormComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
