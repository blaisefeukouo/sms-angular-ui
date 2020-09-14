import { Component, OnInit, Input } from '@angular/core';
import {Student} from '../modele/student';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StudentService } from '../student.service';
import {Router} from "@angular/router"



@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  //@Input() student: Student; //Input permet de dire que c'est un paramètre qui sera passé
  student: Student;
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location, private router: Router
  ) {}

  ngOnInit(): void {
    this.getStudent();
  }
  
  getStudent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id)
      .subscribe(student => this.student = student);
  }

  goBack(): void {
    //this.location.back();
    this.router.navigate(['students'])
  }

}
