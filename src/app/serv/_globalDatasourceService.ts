import { DataSource } from "@angular/cdk/table";
import { Observable, ReplaySubject } from "rxjs";

export class DatasourceService extends DataSource<any> {
    private _dataStream = new ReplaySubject<any>();
  
    constructor(initialData: any) {
      super();
      this.setData(initialData);
    }
  
    connect(): Observable<any> {
      return this._dataStream;
    }
  
    disconnect() {}
  
    setData(data: any) {
      this._dataStream.next(data);
    }
  }