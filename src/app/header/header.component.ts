import { Component, OnInit } from '@angular/core';
import { SchoolyearsService } from '../schoolyears.service';
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
    {linkId:1, name: 'Home', link:'/dashboard'},
    {linkId:2, name: 'SchoolYears', link:'/dashboard'},
    {linkId:3, name: 'Classrooms', link:'/classrooms'},
    {linkId:4, name: 'Students', link:'/students'},
    {linkId:5, name: 'Subjects', link:'/hero-form'}
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
    sessionStorage.setItem(GlobalConstants.currentSchoolYear,schoolYears[0].name);     
  }

  onSelectSchoolYear(selectedSchoolYear:string){
     sessionStorage.setItem(GlobalConstants.currentSchoolYear,selectedSchoolYear);  
     this.router.navigate(['dashboard']);      
  }
}
