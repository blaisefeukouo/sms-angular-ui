import { Component, OnInit, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import {Student} from '../modele/student';

import {StudentService} from '../student.service'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentsTableHeader=[
    {linkId:1, name: 'Registration number'},
    {linkId:2, name: 'Firstname'},
    {linkId:3, name: 'Lastname'},
    {linkId:4, name: 'Phone number'},
  ];

  students:Student[];
  selectedStudent: Student;

  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.loadStudents();
  }
  
  onSelectStudent(student: Student): void {
    this.selectedStudent = student;
    //this.messageService.add(`StudentService: Selected student id=${student.id}`);
  }

  //Appel Anynchrone
  loadStudents(): void {
    this.studentService.getAsynchroneStudents().subscribe(students=>this.students=students);    
  }

  //Appel Synchrone
  getStudents(): void {
    this.students = this.studentService.getStudents();
  }

}
