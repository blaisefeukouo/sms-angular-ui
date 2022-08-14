import { Component, OnInit } from '@angular/core';
import { SchoolyearsService } from '../schoolYear/schoolyears.service';
import { SchoolYear } from '../modele/schoolyear';
import { GlobalConstants } from '../modele/global-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems=[
    {linkId:1, name: 'Home', link:'/dashboard', faIcon:'fa fa-home'},
    {linkId:2, name: 'SchoolYears', link:'/schoolyears', faIcon:'fa fa-graduation-cap'},
    {linkId:3, name: 'Classrooms', link:'/classrooms', faIcon:'fa fa-bank'},
    {linkId:4, name: 'Students', link:'/students', faIcon:'fa fa-group'},
    {linkId:5, name: 'Subjects', link:'/hero-form', faIcon:'fa fa-book'}
  ];

  schoolYears:SchoolYear[];
  selectedSchoolYear:string;

  constructor(private schoolyearsService:SchoolyearsService, private router: Router) { }

  ngOnInit() {
    this.loadSchoolYears();
  }

  loadSchoolYears(): void {
    this.schoolyearsService.getAsynchroneSchoolYears()
      .subscribe(schoolYears => this.afterLoadingSchoolYears(schoolYears));
  }

  afterLoadingSchoolYears(schoolYears:SchoolYear[]):void{
    this.schoolYears = schoolYears
    sessionStorage.setItem(GlobalConstants.currentSchoolYearName,schoolYears[0].name);     
  }

  onSelectSchoolYear(selectedSchoolYear:string){
     sessionStorage.setItem(GlobalConstants.currentSchoolYearName,selectedSchoolYear);  
     this.router.navigate(['dashboard']);      
  }
}
