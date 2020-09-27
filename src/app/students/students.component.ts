import { Component, OnInit, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import {Student} from '../modele/student';
import {StudentService} from '../student.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {finalize} from 'rxjs/operators'

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
  loading = false;
  closeResult: string;
  constructor(private studentService:StudentService, private modalService: NgbModal) { }

  ngOnInit() {
    this.loadStudents();    
  }
  
  onSelectStudent(student: Student): void {
    this.selectedStudent = student;
    //this.messageService.add(`StudentService: Selected student id=${student.id}`);
  }

  //Appel Anynchrone
  loadStudents(): void {
    this.loading=true;
    this.studentService.getAsynchroneStudents().pipe(
      finalize(() => {
        this.loading = false
      })
    ).subscribe(students=>{
      this.students=students
    },
    err=>{
      console.error('Error while getting data from server')
    });    
  }

  //Appel Synchrone
  getStudents(): void {
    this.students = this.studentService.getStudents();
  }

  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  open(content, student:Student) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `${result}`;
      if('OK'===this.closeResult){
        this.deleteStudent(student);
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  deleteStudent(student:Student){
    this.studentService.deleteStudent(student.id).subscribe((response) => {      
      this.loadStudents();
    });
  }

}
