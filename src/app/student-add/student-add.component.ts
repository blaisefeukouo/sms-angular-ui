import { Component, OnInit } from '@angular/core';
import {Student} from '../modele/student';
import {StudentService} from '../student.service'
import {Router} from "@angular/router"

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {
  student= new Student();
  constructor(private studentService:StudentService, private router: Router) { }

  submitted = false;

  onSubmit() { 
    this.studentService.saveStudent(this.student).subscribe( student => {
      this.router.navigate(['detail/'+student.id])      
    });
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.student); }
}
