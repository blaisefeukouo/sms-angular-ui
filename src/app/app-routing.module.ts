import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsComponent} from './students/students.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentAddComponent} from './student-add/student-add.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { ClassromsListComponent } from './classroms-list/classroms-list.component';
import { ClassromsAddComponent } from './classroms-add/classroms-add.component';
import { ClassromsDetailsComponent } from './classroms-details/classroms-details.component';
import { ClassromsEditComponent } from './classroms-edit/classroms-edit.component';
import { SchoolyearListComponent } from './schoolyear/schoolyear-list/schoolyear-list.component';
import { SchoolyearAddComponent } from './schoolyear/schoolyear-add/schoolyear-add.component';
import { SchoolyearEditComponent } from './schoolyear/schoolyear-edit/schoolyear-edit.component';
import { SchoolyearDetailComponent } from './schoolyear/schoolyear-detail/schoolyear-detail.component';


const routes: Routes = [
  //adding the defaut route
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component:DashboardComponent},
  { path: 'schoolyears', component: SchoolyearListComponent },
  { path: 'schoolyear/add', component: SchoolyearAddComponent },
  { path: 'schoolyear/edit/:id', component: SchoolyearEditComponent },
  { path: 'schoolyear/detail/:id', component: SchoolyearDetailComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'student/add', component:StudentAddComponent},    
  { path: 'student/detail/:id', component: StudentDetailComponent },
  { path: 'student/edit/:id', component: StudentEditComponent },
  { path: 'classrooms', component: ClassromsListComponent },  
  { path: 'classroom/add', component:ClassromsAddComponent},    
  { path: 'classroom/detail/:id', component: ClassromsDetailsComponent },
  { path: 'classroom/edit/:id', component: ClassromsEditComponent },  
  { path: 'hero-form', component: HeroFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
