import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './_global';

@Injectable({
  providedIn: 'root'
})
export class InstructorService extends GlobalService{
  
  constructor(protected override _http:HttpClient) { 
    super();
    this.setClient(_http);
    this.setUrl("Instructors");
  }

}