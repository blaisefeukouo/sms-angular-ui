import { Component, OnInit } from '@angular/core';
import { Classroom } from '../modele/classroom';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassroomsService } from '../classrooms.service';

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

  goBack(): void {    
    this.router.navigate(['/classrooms'])
  }

}
