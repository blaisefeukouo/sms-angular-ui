import { Injectable } from '@angular/core';
import { SchoolYear } from './modele/schoolyear';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import { GlobalConstants } from './modele/global-constants';

@Injectable({
  providedIn: 'root'
})
export class SchoolyearsService {

  constructor(private httpClient: HttpClient) { }

  private schoolYearUrl = GlobalConstants.restBaseUrl+'/schoolyears';  

   
  getAsynchroneSchoolYears(): Observable<SchoolYear[]> {
     return this.httpClient.get<SchoolYear[]>(this.schoolYearUrl+'/list');
  } 

  getSchoolYear(id: number): Observable<SchoolYear> {   
    return this.httpClient.get<SchoolYear>(this.schoolYearUrl+'/view.htm/'+id);
  }

  saveSchoolYear(SchoolYear: SchoolYear) {
    return this.httpClient.post<SchoolYear>(this.schoolYearUrl+'/save', SchoolYear);
  }

  updateSchoolYear(SchoolYear: SchoolYear) {
    return this.httpClient.put<SchoolYear>(this.schoolYearUrl+'/update', SchoolYear);
  }

  deleteSchoolYear(id:number) {    
    return this.httpClient.delete(this.schoolYearUrl+"/remove/"+ id);
  }

}
