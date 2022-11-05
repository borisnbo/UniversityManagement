import { Component, EventEmitter, Inject, OnInit, Output, TemplateRef } from '@angular/core';
import { StudentService } from 'src/app/serv/student.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { StudentformComponent } from './studentform/studentform.component';
import { FormItem, isEmpty } from 'src/app/serv/_global';
import { MatTableDataSource } from '@angular/material/table';
import { PopUpService } from 'src/app/serv/_globalPupopServive';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {

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
  _dataSource: any;
  
///End of transfer objects
  constructor(private _studentServ:StudentService, 
    private _popupService:PopUpService) {}

  ngOnInit(): void {
    this._dataSource = new MatTableDataSource();
     this.getStudents();
  }
  getStudents(){
    this._studentServ.getAll().subscribe(_students=>{
      this._dataSource.data = _students;
    });
  }
  
  OpenPopup() {
    var data = this._popupService.OpenPopup(this.myFormObject, this.myFormItem)
    data.subscribe((item: any)=>{
      if(!isEmpty(item)){
        this._studentServ.createOrEdit(item).subscribe(res=>{
          this.getStudents();
        });
      }
   });
   }
}