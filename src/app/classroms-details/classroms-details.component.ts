import { Component, OnInit } from '@angular/core';
import { Classroom } from '../modele/classroom';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassroomsService } from '../classrooms.service';
import { Location } from '@angular/common';
import {finalize} from 'rxjs/operators'

@Component({
  selector: 'app-classroms-details',
  templateUrl: './classroms-details.component.html',
  styleUrls: ['./classroms-details.component.css']
})
export class ClassromsDetailsComponent implements OnInit {

  classroom: Classroom;
  loading = false;
  constructor(
    private route: ActivatedRoute,
    private classroomService: ClassroomsService,
    private router: Router,
    private location:Location
  ) {}

  ngOnInit(): void {
    this.getclassroom();
  }
  
  getclassroom(): void {
    this.loading = true;
    const classroomId = +this.route.snapshot.paramMap.get('id');
    this.classroomService.getClassroom(classroomId).pipe(
      finalize(() => this.loading = false)
    ).subscribe(
        classroom => {
          this.classroom = classroom
        },
        err=>{
          console.error('Error while getting data from server')
        }
    );
  }

  backToList(): void {    
    this.router.navigate(['/classrooms'])
  }

  goBack(): void {
    this.location.back();
  }

}
