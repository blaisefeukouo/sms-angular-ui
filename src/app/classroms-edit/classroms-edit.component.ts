import { Component, OnInit } from '@angular/core';
import { ClassroomsService } from '../classrooms.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Classroom } from '../modele/classroom';

@Component({
  selector: 'app-classroms-edit',
  templateUrl: './classroms-edit.component.html',
  styleUrls: ['./classroms-edit.component.css']
})
export class ClassromsEditComponent implements OnInit {
  classroom:Classroom;
  constructor(
    private route: ActivatedRoute,
    private classroomService: ClassroomsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getclassroom();
  }
  
  getclassroom(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.classroomService.getClassroom(id)
      .subscribe(classroom => this.classroom = classroom);
  }
  

}
