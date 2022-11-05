import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentformComponent } from '../comp/student/studentform/studentform.component';

@Injectable({
  providedIn: 'root'
})
export class PopUpService{

    constructor(private _matdialog: MatDialog){}

    OpenPopup(FormObject:any, FormItem:any, width:string='50%') 
    {
        const popup= this._matdialog.open(StudentformComponent,{width:width,
         data:{
           formObject: FormObject,
           formItems: FormItem
         },
         disableClose:true
       });
       return popup.afterClosed();
     }
}
