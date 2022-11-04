import { Component, EventEmitter, Inject, OnInit, Output, TemplateRef } from '@angular/core';
import { StudentService } from 'src/app/serv/student.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { StudentformComponent } from './studentform/studentform.component';
import { FormItem, isEmpty } from 'src/app/serv/_global';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {

  students: any;
  header = ['lastName', 'firstName'];
  /**
   * Elements that i transfer to the modal manager.
   */
  myFormObject = {
    firstName: new FormControl(''),
    lastName: new FormControl('')
  }
  
  myFormItem: FormItem[] = [
    {type:"text", name: this.myFormObject.firstName, displayName:"Enter The firstName", placeholder:"John ...", cols:6},
    {type:"text", name: this.myFormObject.lastName, displayName:"Enter The lastName", placeholder:"Doe ...", cols:6}
   ];
  
///End of transfer objects
  constructor(private _studentServ:StudentService, private matdialog: MatDialog) {}

  ngOnInit(): void {
     this.getStudents();
  }
  getStudents(){
    this._studentServ.getAll().subscribe(_students=>{
      this.students = _students;
    });
  }
  
  OpenPopup() {
    const popup= this.matdialog.open(StudentformComponent,{width:'40%',
     data:{
       formObject: this.myFormObject,
       formItems: this.myFormItem
     },
     disableClose:true

   });
   popup.afterClosed().subscribe(item=>{
      //console.log(item);
      if(!isEmpty(item)){

        this.students = undefined;
        this._studentServ.createOrEdit(item).subscribe(res=>{
          
            this.getStudents();
        });
      }
   });
   }
}