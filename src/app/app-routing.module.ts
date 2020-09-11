import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsComponent} from './students/students.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentAddComponent} from './student-add/student-add.component';
import { HeroFormComponent } from './hero-form/hero-form.component';


const routes: Routes = [
  { path: 'dashboard', component:DashboardComponent},
  { path: 'students', component: StudentsComponent },
  { path: 'student/add', component:StudentAddComponent},  
  //adding the defaut route
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: StudentDetailComponent },
  { path: 'hero-form', component: HeroFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
