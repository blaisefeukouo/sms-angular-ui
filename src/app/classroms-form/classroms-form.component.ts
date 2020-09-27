import { Component, OnInit, Input } from '@angular/core';
import { Classroom } from '../modele/classroom';
import { ClassroomsService } from '../classrooms.service';
import { Router } from '@angular/router';
import { GlobalConstants } from '../modele/global-constants';
import {finalize} from 'rxjs/operators'

@Component({
  selector: 'app-classroms-form',
  templateUrl: './classroms-form.component.html',
  styleUrls: ['./classroms-form.component.css']
})
export class ClassromsFormComponent implements OnInit {
  @Input() formTitle: String;
  @Input() classroom= new Classroom();
  @Input() isAddForm:boolean;
  loading = false;

  constructor(private classroomService:ClassroomsService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void { 
    this.loading=true;
    var currentSchoolYear= sessionStorage.getItem(GlobalConstants.currentSchoolYear); 

    //alert('selected schoolYear '+currentSchoolYear)
    if(this.classroom.id===null){
      this.classroomService.updateClassroom(this.classroom).pipe(
        finalize(() => this.loading = false)
      ).subscribe( 
          classroom => {
            this.navigateToDetails(classroom.id);
          },          
          err=>{
            console.error('Error while getting data from server')
          }
      );
    }else{
      this.classroomService.saveClassroom(this.classroom).pipe(
        finalize(() => this.loading = false)
      ).subscribe( 
          classroom => {
            this.navigateToDetails(classroom.id);
          },
          err=>{
            console.error('Error while getting data from server')
          }
      );
    }    
  } 

  navigateToDetails(classroomId:number): void{
    this.router.navigate(['classroom/detail/'+classroomId])          
  }

}
