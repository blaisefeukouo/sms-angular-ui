import { Component, OnInit } from '@angular/core';
import { SchoolYear } from 'src/app/modele/schoolyear';
import { SchoolyearsService } from '../schoolyears.service';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-schoolyear-detail',
  templateUrl: './schoolyear-detail.component.html',
  styleUrls: ['./schoolyear-detail.component.css']
})
export class SchoolyearDetailComponent implements OnInit {
  schoolyear: SchoolYear;
  loading = false;
  constructor(
    private route:ActivatedRoute, 
    private router:Router,
    private location: Location,
    private schoolYearService:SchoolyearsService) { }

  ngOnInit() {
    this.getSchoolYear();
  }
  
  getSchoolYear(): void {
    this.loading=true;
    const schoolyearId = +this.route.snapshot.paramMap.get('id');
    this.schoolYearService.getSchoolYear(schoolyearId).pipe(
        finalize(() => {
          this.loading = false
        })
      ).subscribe(retrievedSchoolyear => {
        this.schoolyear = retrievedSchoolyear
      },
      err=>{
        console.error('Error while getting schoolyear data from server')
      }
    );
  }

  goBack(): void {
    //this.location.back();
    this.router.navigate(['students'])
  }

}
