import { Component, OnInit } from '@angular/core';
import { Classroom } from '../modele/classroom';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassroomsService } from '../classrooms.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-classroms-details',
  templateUrl: './classroms-details.component.html',
  styleUrls: ['./classroms-details.component.css']
})
export class ClassromsDetailsComponent implements OnInit {

  classroom: Classroom;
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
    const id = +this.route.snapshot.paramMap.get('id');
    this.classroomService.getClassroom(id)
      .subscribe(classroom => this.classroom = classroom);
  }

  backToList(): void {    
    this.router.navigate(['/classrooms'])
  }

  goBack(): void {
    this.location.back();
  }

}
