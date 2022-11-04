import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { isEmpty } from 'src/app/serv/_global';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent {

  formElements:any;
  options :any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private Ref: MatDialogRef<StudentformComponent>,
          private _formBuilder: FormBuilder) { }


  async ngOnInit(): Promise<void> {
    this.options = this._formBuilder.group(this.data.formObject);
    this.formElements = this.data.formItems;
    //console.log(this.formElements);
  }
  Closepopup() {
    if(!isEmpty(this.options.value))
      this.Ref.close(this.options.value);
  } 
  Close() {
    this.Ref.close();
  }  

  getErrorMessage(element:FormControl) {
    if (element.hasError('required')) {
      return 'You must enter a value';
    }
    return element.hasError('email') ? 'Not a valid email' : '';
  }
}
