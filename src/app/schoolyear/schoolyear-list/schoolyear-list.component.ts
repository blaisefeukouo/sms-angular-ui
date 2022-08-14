import { Component, OnInit } from '@angular/core';
import { SchoolyearsService } from '../schoolyears.service';
import { SchoolYear } from 'src/app/modele/schoolyear';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-schoolyear-list',
  templateUrl: './schoolyear-list.component.html',
  styleUrls: ['./schoolyear-list.component.css']
})
export class SchoolyearListComponent implements OnInit {
  schoolyearTableHeader=[
    {linkId:1, name: 'Name'},
    {linkId:2, name: 'Start date'},
    {linkId:3, name: 'End date'},    
    {linkId:4, name: 'State'},    
  ];
  loading = false;
  
  schoolyears:SchoolYear[];
  constructor(private schoolyearService:SchoolyearsService) { }

  ngOnInit() {
    this.loadSchoolYears();
  }
//Appel Anynchrone
loadSchoolYears(): void {
  this.loading=true;
  this.schoolyearService.getAsynchroneSchoolYears().pipe(
    finalize(() => this.loading = false)
  ).subscribe(
    returnedSchoolyears=>{
      this.schoolyears=returnedSchoolyears
    },
    err=>{
      console.error('Error while getting schoolyears data from server')
    }
  );  
  
}
}
