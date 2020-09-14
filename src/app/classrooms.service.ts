import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Classroom } from './modele/classroom';

@Injectable({
  providedIn: 'root'
})
export class ClassroomsService {

  constructor(private httpClient: HttpClient) { }
  
  //private classroomsUrl = 'http://localhost:8080/rest/classrooms';
  private classroomsUrl = 'https://fblaise-sms.herokuapp.com/rest/classrooms';

   
  //methode Asynchrone
  getAsynchroneClassrooms(): Observable<Classroom[]> {
     return this.httpClient.get<Classroom[]>(this.classroomsUrl+'/list');
  } 

  getClassroom(id: number): Observable<Classroom> {   
    return this.httpClient.get<Classroom>(this.classroomsUrl+'/view.htm/'+id);
  }

  saveClassroom(classroom: Classroom) {
    return this.httpClient.post<Classroom>(this.classroomsUrl+'/save', classroom);
  }

  updateClassroom(classroom: Classroom) {
    return this.httpClient.put<Classroom>(this.classroomsUrl+'/update', classroom);
  }

  deleteClassroom(id:number) {    
    return this.httpClient.delete(this.classroomsUrl+"/remove/"+ id);
  }
}
