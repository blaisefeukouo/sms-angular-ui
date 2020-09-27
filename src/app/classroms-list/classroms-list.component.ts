import { Component, OnInit } from '@angular/core';
import { Classroom } from '../modele/classroom';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ClassroomsService } from '../classrooms.service';
import {finalize} from 'rxjs/operators'


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
  loading = false;
  constructor(private classroomsService:ClassroomsService, private modalService: NgbModal) { }

  ngOnInit() {
    this.loadClassrooms();
  }  
  
  //Appel Anynchrone
  loadClassrooms(): void {
    this.loading=true;
    this.classroomsService.getAsynchroneClassrooms().pipe(
      finalize(() => this.loading = false)
    ).subscribe(
      classrooms=>{
        this.classrooms=classrooms
      },
      err=>{
        console.error('Error while getting data from server')
      }
    );  
    
  }


  openModal(modal, classroom:Classroom): void {
    this.modalService.open(modal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `${result}`;
      if('OK'===this.closeResult){
        this.deleteClassroom(classroom);
      }
    });
  }

  deleteClassroom(classroom:Classroom): void{
    this.classroomsService.deleteClassroom(classroom.id).subscribe((response) => {      
      this.loadClassrooms();
    });
  }

}
