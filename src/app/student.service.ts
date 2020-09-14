import { Injectable } from '@angular/core';
import {Student} from './modele/student';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  constructor(private httpClient: HttpClient) { }
  
  private studentsUrl = 'http://localhost:8080/rest/students';
  //private studentsUrl = 'https://fblaise-sms.herokuapp.com/rest/students';

   //methode synchrone
  getStudents(): Student[] {
    //return STUDENTS;
    return null;
  }

  //methode Asynchrone
  getAsynchroneStudents(): Observable<Student[]> {
    //return of(STUDENTS);
    return this.httpClient.get<Student[]>(this.studentsUrl+'/list');
  } 

  getStudent(id: number): Observable<Student> {   
    return this.httpClient.get<Student>(this.studentsUrl+'/view.htm/'+id);
  }

  saveStudent(student: Student) {
    return this.httpClient.post<Student>(this.studentsUrl+'/save', student);
  }

  updateStudent(student: Student) {
    return this.httpClient.put<Student>(this.studentsUrl, student);
  }

  deleteStudent(id:number) {    
    return this.httpClient.delete(this.studentsUrl+"/remove/"+ id);
  }

}
