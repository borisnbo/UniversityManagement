import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {

  @Input() datas!:any;

   @Input() columnsHeader :any;  

 @Input() _dataSource!:MatTableDataSource<any>;

  constructor(private _liveAnnouncer: LiveAnnouncer) {

  }
  ngOnInit(){
       // this.dataSource = new MatTableDataSource(this.datas);
  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;

  ngAfterViewInit() {
    //console.log(this.dataSource);
    this._dataSource.sort = this.sort;
    this._dataSource.paginator = this.paginator;
  }
  
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
