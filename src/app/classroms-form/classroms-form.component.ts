import { Component, OnInit, Input } from '@angular/core';
import { Classroom } from '../modele/classroom';
import { ClassroomsService } from '../classrooms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classroms-form',
  templateUrl: './classroms-form.component.html',
  styleUrls: ['./classroms-form.component.css']
})
export class ClassromsFormComponent implements OnInit {
  @Input() formTitle: String;
  @Input() classroom= new Classroom();
  @Input() isAddForm:boolean;

  constructor(private classroomService:ClassroomsService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() { 
    if(this.classroom.id===null){
      this.classroomService.updateClassroom(this.classroom).subscribe( classroom => {
        this.router.navigate(['classroom/detail/'+classroom.id])      
      });
    }else{
      this.classroomService.saveClassroom(this.classroom).subscribe( classroom => {
        this.router.navigate(['classroom/detail/'+classroom.id])      
      });
    }
    
  } 

}
