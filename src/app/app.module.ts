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
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { ClassromsListComponent } from './classroms-list/classroms-list.component';
import { ClassromsDetailsComponent } from './classroms-details/classroms-details.component';
import { ClassromsEditComponent } from './classroms-edit/classroms-edit.component';
import { ClassromsAddComponent } from './classroms-add/classroms-add.component';
import { ClassromsFormComponent } from './classroms-form/classroms-form.component';



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
    HeroFormComponent,
    StudentFormComponent,
    StudentEditComponent,
    ClassromsListComponent,
    ClassromsDetailsComponent,
    ClassromsEditComponent,
    ClassromsAddComponent,
    ClassromsFormComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
