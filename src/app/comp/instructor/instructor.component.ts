import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { InstructorService } from 'src/app/serv/instructorService';
import { FormItem, isEmpty } from 'src/app/serv/_global';
import { DatasourceService } from 'src/app/serv/_globalDatasourceService';
import { PopUpService } from 'src/app/serv/_globalPupopServive';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {


  //instructor: any;
  header = ['lastName', 'firstName','hireDate'];
  /**
   * Elements that i transfer to the modal manager.
   */
  myFormObject = {
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    hireDate: new FormControl('')
  }
  _dataSource:any;
  
  myFormItem = [
    {type:"text", name: this.myFormObject.firstName, displayName:"Enter The firstName", placeholder:"John ..."},
    {type:"text", name: this.myFormObject.lastName, displayName:"Enter The lastName", placeholder:"Doe ..."},
    {type:"date", name: this.myFormObject.hireDate, displayName:"Enter The HireDate"}
   ];
  
///End of transfer objects
  constructor(private _instructorServ:InstructorService, 
    private _popupService:PopUpService) {
    }

  ngOnInit(): void {
     this._dataSource = new MatTableDataSource();
     this.getInstructors();
     //this._datasource.set
      //this._datasource = new DatasourceService(this.instructor);
  }
  getInstructors(){
    this._instructorServ.getAll().subscribe(_instructor=>{
      //this.instructor = _instructor;
      this._dataSource.data = _instructor;
      //this.display = true;
    });
  }

  OpenPopup(){
    var data = this._popupService.OpenPopup(this.myFormObject, this.myFormItem)
    data.subscribe(res=>{
      if(res!==undefined||!isEmpty(res)){
        this._instructorServ.createOrEdit(res).subscribe(_instr=>{
          this.getInstructors();
        });
      }
    })
  }
  
  // OpenPopup() {
  //   const popup= this.matdialog.open(StudentformComponent,{width:'40%',
  //    data:{
  //      formObject: this.myFormObject,
  //      formItems: this.myFormItem
  //    },
  //    disableClose:true
  //  });
  //  popup.afterClosed().subscribe(item=>{
  //     //console.log(item);
  //     if(!isEmpty(item)){
  //       this.instructor = undefined;
  //       this._studentServ.createOrEdit(item).subscribe(res=>{
  //         //console.log(res);//cette donnee de retour sera emise dans un evenement.
  //         //Et lorsque on catch l'evenement, on restore le state.
  //           this.getInstructors();
  //       });
  //     }
  //  });
  //  }
}
