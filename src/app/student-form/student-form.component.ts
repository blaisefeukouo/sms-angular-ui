import { Component, OnInit, Input } from '@angular/core';
import {Student} from '../modele/student';
import {StudentService} from '../student.service';
import {Router} from "@angular/router";
import {finalize} from 'rxjs/operators'

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit{
  @Input() formTitle: String;
  @Input() student= new Student();
  @Input() isAddForm:boolean;
  loading = false;
  
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
  
  constructor(private studentService:StudentService, private router: Router) { }

  ngOnInit() {
  }

  submitted = false;

  onSubmit() {
    this.loading=true; 
    if(this.student.id===null){
      this.studentService.updateStudent(this.student).pipe(
        finalize(() => {
          this.loading = false
        })
      ).subscribe( student => {
          this.navigateToDetails(student.id);
        },
        err=>{
          console.error('Error while getting data from server')
        }
      );
    }else{
      this.studentService.saveStudent(this.student).pipe(
        finalize(() => {
          this.loading = false
        })
      ).subscribe( student => {
          this.navigateToDetails(student.id);
        },
        err=>{
          console.error('Error while getting data from server')
        }
      );
    }
    
  } 

  navigateToDetails(studentId:number): void{
    this.router.navigate(['student/detail/'+studentId])          
  }

}
