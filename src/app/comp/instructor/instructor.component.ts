import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { InstructorService } from 'src/app/serv/instructorService';
import { FormItem, isEmpty } from 'src/app/serv/_global';
import { StudentformComponent } from '../student/studentform/studentform.component';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {


  instructor: any;
  header = ['lastName', 'firstName','hireDate'];
  /**
   * Elements that i transfer to the modal manager.
   */
  myFormObject = {
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    hirerDate: new FormControl('')
  }
  
  myFormItem = [
    {type:"text", name: this.myFormObject.firstName, displayName:"Enter The firstName", placeholder:"John ..."},
    {type:"text", name: this.myFormObject.lastName, displayName:"Enter The lastName", placeholder:"Doe ..."},
    {type:"date", name: this.myFormObject.hirerDate, displayName:"Enter The HireDate"}
   ];
  
///End of transfer objects
  constructor(private _studentServ:InstructorService, private matdialog: MatDialog) {}

  ngOnInit(): void {
     this.getInstructors();
  }
  getInstructors(){
    this._studentServ.getAll().subscribe(_instructor=>{
      this.instructor = _instructor;
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
        this.instructor = undefined;
        this._studentServ.createOrEdit(item).subscribe(res=>{
          //console.log(res);//cette donnee de retour sera emise dans un evenement.
          //Et lorsque on catch l'evenement, on restore le state.
            this.getInstructors();
        });
      }
   });
   }
}
