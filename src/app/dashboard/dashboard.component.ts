import { Component, OnInit } from '@angular/core';
import { Student } from '../modele/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.studentService.getAsynchroneStudents()
      .subscribe(students => this.students = students.slice(0, 4));
  }
}
