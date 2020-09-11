import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems=[
    {linkId:1, name: 'Home', link:'/dashboard'},
    {linkId:2, name: 'SchoolYears', link:'/dashboard'},
    {linkId:3, name: 'Classrooms', link:'/dashboard'},
    {linkId:4, name: 'Students', link:'/students'},
    {linkId:5, name: 'Subjects', link:'/hero-form'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
