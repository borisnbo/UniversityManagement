import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CourseService } from 'src/app/serv/course.service';
import { DepartmentService } from 'src/app/serv/DepartmentService';
import { FormItem, isEmpty } from 'src/app/serv/_global';
import { StudentformComponent } from '../student/studentform/studentform.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  
  header = ['title', 'credits', 'Department'];

  /**
   * Elements that i transfer to the modal manager.
   */
  myFormObject = {
    title: new FormControl(''),
    credit: new FormControl(''),
    departmentId: new FormControl(''),
  }
  
  // myFormItem = [
  //   {type:"text", name: this.myFormObject.title, displayName:"Enter The course Title"},
  //   {type:"number", name: this.myFormObject.credit, displayName:"Enter The number of credit"},
  //   {type:"select", name: this.myFormObject.departmentId, displayName:"Enter The department id"}
  //  ];
  
///End of transfer objects
  courses: Array<object>=[];
  departments:any;
  render = false;
  constructor(private _courseServ:CourseService, private _Depservice:DepartmentService, private matdialog: MatDialog) {}

  ngOnInit(): void {
     this.getCourses();
     this.getDepartments();
  }
  getCourses(){  
    this.courses = [];
    var dt :any;
    this._courseServ.getAll().subscribe(_courses=>{   
      dt = _courses;
      dt.forEach((element:any)=>{
        element.Department = element.department.name;
        this.courses.push(element);
      }); 
      this.render = true;  
    });
  }
  getDepartments(){
    if(this.departments ===undefined){
      this._Depservice.getAll().subscribe(_data=>{
        this.departments = _data;
      });
    }
    return this.departments;
  }

  
  /**
   * Cette methode sera mise dans un service global,
   * et donc les enregistrements ne seront plus que partie remise pour tout les formulaires.
   */
  OpenPopup() {
      
  var myFormItem = [
    {type:"text", name: this.myFormObject.title, displayName:"Enter The course Title"},
    {type:"number", name: this.myFormObject.credit, displayName:"Enter The number of credit"},
    {type:"select", name: this.myFormObject.departmentId, displayName:"Enter The department id", mapper:this.getDepartments(), selector:'name'}
   ];

    const popup= this.matdialog.open(StudentformComponent,{width:'40%',
     data:{
       formObject: this.myFormObject,
       formItems: myFormItem
     },
     disableClose:true

   });
   popup.afterClosed().subscribe(item=>{
    if(!isEmpty(item)){
      this.render = false;
      //console.log(item)
      this._courseServ.createOrEdit(item).subscribe(res=>{
          this.getCourses();
      });
    }
   });
   }
}
