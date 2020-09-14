import { Component, OnInit } from '@angular/core';
import { Classroom } from '../modele/classroom';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ClassroomsService } from '../classrooms.service';


@Component({
  selector: 'app-classroms-list',
  templateUrl: './classroms-list.component.html',
  styleUrls: ['./classroms-list.component.css']
})
export class ClassromsListComponent implements OnInit {
  clasroomsTableHeader=[
    {linkId:1, name: 'Name'},
    {linkId:2, name: 'Description'},
    {linkId:3, name: 'Fees'},    
  ];

  classrooms:Classroom[];
  closeResult: string;
  constructor(private classroomsService:ClassroomsService, private modalService: NgbModal) { }

  ngOnInit() {
    this.loadClassrooms();
  }  
  
  //Appel Anynchrone
  loadClassrooms(): void {
    this.classroomsService.getAsynchroneClassrooms().subscribe(classrooms=>this.classrooms=classrooms);    
  }


  open(content, classroom:Classroom) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `${result}`;
      if('OK'===this.closeResult){
        this.deleteClassroom(classroom);
      }
    });
  }

  deleteClassroom(classroom:Classroom){
    this.classroomsService.deleteClassroom(classroom.id).subscribe((response) => {      
      this.loadClassrooms();
    });
  }

}
