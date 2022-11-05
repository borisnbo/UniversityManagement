import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DepartmentService } from 'src/app/serv/DepartmentService';
import { InstructorService } from 'src/app/serv/instructorService';
import { isEmpty } from 'src/app/serv/_global';
import { StudentformComponent } from '../student/studentform/studentform.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments:Array<object> = [];
  instructors: any;
  header = ['name', 'budget','Administrator'];
  /**
   * Elements that i transfer to the modal manager.
   */
  myFormObject = {
    name: new FormControl(''),
    budjet: new FormControl(0.0),
    instructorId: new FormControl('')
  }
  _dataSource: any;
 
  
///End of transfer objects
  constructor(private _service:DepartmentService, private _instructorServ:InstructorService, private matdialog: MatDialog) {}

  async ngOnInit(): Promise<void> {
     this._dataSource = new MatTableDataSource();
     //this.getInstructors();
     await this.getDepartment();
     this.getInstructors();
  }
  getInstructors(){
    if(this.instructors===undefined){
      this._instructorServ.getAll().subscribe(_inst=>{
        this.instructors = _inst;
      });
    }
    return this.instructors;
  }
  async getDepartment(){
    
    this._service.getAll().subscribe(_data=>{
      var res :any;
      res = _data;
      res.forEach((element:any) => {
          element.Administrator = element.administrator.firstName+' '+element.administrator.lastName;
          this.departments.push(element);
      });
      this._dataSource.data = this.departments;
    });
  }
  
  OpenPopup() {
     
    var myFormItem = [
        {type:"text", name: this.myFormObject.name, displayName:"Enter The department name", placeholder:"John ..."},
        {type:"number", name: this.myFormObject.budjet, displayName:"Enter The budget"},
        {type:"select", name: this.myFormObject.instructorId, displayName:"Select the administrator", mapper:this.getInstructors(), selector:"firstName"}
      ];
    //console.log(this.getInstructors());
    const popup= this.matdialog.open(StudentformComponent,{width:'40%',
     data:{
       formObject: this.myFormObject,
       formItems: myFormItem
     },
     disableClose:true

   });
   popup.afterClosed().subscribe(item=>{
    
      if(!isEmpty(item)){
        this.departments = [];
        //console.log(item)
        this._service.createOrEdit(item).subscribe(res=>{
            this.getDepartment();
        });
      }
   });
   }
}
