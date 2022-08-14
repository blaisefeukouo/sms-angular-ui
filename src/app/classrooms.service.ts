import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Classroom } from './modele/classroom';
import { GlobalConstants } from './modele/global-constants';
import { ClassroomWithStudents } from './modele/ClassroomWithStudents';

@Injectable({
  providedIn: 'root'
})
export class ClassroomsService {

  constructor(private httpClient: HttpClient) { }
  
  private classroomsUrl =  GlobalConstants.restBaseUrl+'/classrooms';  
   
  //methode Asynchrone
  getAsynchroneClassrooms(): Observable<Classroom[]> {
     return this.httpClient.get<Classroom[]>(this.classroomsUrl+'/list');
  } 

  getClassroom(id: number): Observable<ClassroomWithStudents> {   
     var currentSchoolYearName= sessionStorage.getItem(GlobalConstants.currentSchoolYearName);    
    return this.httpClient.get<ClassroomWithStudents>(this.classroomsUrl+'/view.htm/'+id+"/"+currentSchoolYearName);
  }

  saveClassroom(classroom: Classroom) {
    var currentSchoolYearName= sessionStorage.getItem(GlobalConstants.currentSchoolYearName);    
    return this.httpClient.post<Classroom>(this.classroomsUrl+'/save/'+currentSchoolYearName, classroom);
  }

  updateClassroom(classroom: Classroom) {
    return this.httpClient.put<Classroom>(this.classroomsUrl+'/update', classroom);
  }

  deleteClassroom(id:number) {    
    return this.httpClient.delete(this.classroomsUrl+"/remove/"+ id);
  }
}
