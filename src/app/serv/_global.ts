
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface FormItem{
    type:string;
    name: FormControl;
    displayName:string;
    placeholder:string;
    cols:number;
  }

  /**
   * This function verify if every members of an object are empty or not
   * @param obj object of any type
   * @returns return a boolean
   */
export function isEmpty(obj:any) {
    return !obj || !Object.keys(obj).every(x => obj[x] !== '');
  }
  

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
    
    private headers:any = { 'content-type': 'application/json'} ;
    private _url:string="https://localhost:7155/api/";
    protected _http!: HttpClient;
    constructor() { }

    protected setUrl(url:string){
        this._url+=url;
    }
    protected setClient(client:HttpClient){
        this._http = client;
    }

    public getAll() {
        return this._http.get(this._url);
    }

    public createOrEdit(data:any, id:any = null){
        if(id==null){
            return this.create(data);
        }
        return this.update(data, id);
    }
    protected create(data:any){
        return this._http.post(this._url, data, this.headers)
    }
    protected update(data:any, id:any){
        return this._http.put(this._url+"/"+id, data, this.headers)
    }

}
