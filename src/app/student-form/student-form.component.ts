import { Component, OnInit, Input } from '@angular/core';
import {Student} from '../modele/student';
import {StudentService} from '../student.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit{
  @Input() formTitle: String;
  @Input() student= new Student();
  @Input() isAddForm:boolean;
  
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
  
  constructor(private studentService:StudentService, private router: Router) { }

  ngOnInit() {
  }

  submitted = false;

  onSubmit() { 
    if(this.student.id===null){
      this.studentService.updateStudent(this.student).subscribe( student => {
        this.router.navigate(['detail/'+student.id])      
      });
    }else{
      this.studentService.saveStudent(this.student).subscribe( student => {
        this.router.navigate(['detail/'+student.id])      
      });
    }
    
  } 

}
