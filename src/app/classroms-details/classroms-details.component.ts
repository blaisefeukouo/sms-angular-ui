import { Component, OnInit } from '@angular/core';
import { Classroom } from '../modele/classroom';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassroomsService } from '../classrooms.service';
import { Location } from '@angular/common';
import {finalize} from 'rxjs/operators'
import { Student } from '../modele/student';

@Component({
  selector: 'app-classroms-details',
  templateUrl: './classroms-details.component.html',
  styleUrls: ['./classroms-details.component.css']
})
export class ClassromsDetailsComponent implements OnInit {

  classroom: Classroom;
  students: Student[];
  studentsTableHeader=[
    {linkId:1, name: 'Registration number'},
    {linkId:2, name: 'Firstname'},
    {linkId:3, name: 'Lastname'},
    {linkId:4, name: 'Phone number'},
  ];
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
        classroomWithStudents => {
          this.classroom = classroomWithStudents.classroom
          this.students = classroomWithStudents.students
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
