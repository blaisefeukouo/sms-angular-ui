import { Component, OnInit } from '@angular/core';
import { SchoolyearsService } from '../schoolyears.service';
import { SchoolYear } from 'src/app/modele/schoolyear';
import { finalize } from 'rxjs/operators';
import { SchoolyearDetailComponent } from '../schoolyear-detail/schoolyear-detail.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
  closeResult: string;
  schoolyears:SchoolYear[];
  constructor(private schoolyearService:SchoolyearsService, private modalService: NgbModal) { }

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

openModal(modal, schoolYear:SchoolYear): void {
  this.modalService.open(modal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {  
    this.closeResult = `${result}`;
    if('OK'===this.closeResult){
      this.deleteSchoolYear(schoolYear);
    }
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}

deleteSchoolYear(schoolYear:SchoolYear): void{
  this.schoolyearService.deleteSchoolYear(schoolYear.id).subscribe((response) => {      
    this.loadSchoolYears();
  });
}
}
