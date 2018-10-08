import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { DataService } from '../data.service';
import {DataSource} from '@angular/cdk/table';
import { Observable } from 'rxjs';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  users$: Object;
  constructor(private data: DataService) { }

  displayedColumns : string[]  = ['select','policyId', 'account', 'product', 'status','premium','effectiveDate','underWriter','lastModified','actions'];
  //dataSource = this.data.ELEMENT_DATA;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  // selection = new SelectionModel<PeriodicElement>(true, []);
  /** Whether the number of selected elements matches the total number of rows. */

  ngOnInit() {
   //  this.users$ = this.data.ELEMENT_DATA; 
   this.dataSource.paginator = this.paginator;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

}

export interface PeriodicElement {
  policyId: string;
  account: string;
  product: string;
  status: string;
  premium: string;
  effectiveDate: Date;
  underWriter: string;
  lastModified: Date
}
const ELEMENT_DATA: PeriodicElement[] = [
  {policyId: '007-3200-RU', account: 'AV', product: 'Life Insurance Retire', status: 'Progress', premium: '$25,000.00',effectiveDate: new Date(), underWriter: 'John Smith', lastModified: new Date()},
  {policyId: '007-3200-RU', account: 'AV', product: 'Life Insurance Retire', status: 'Progress', premium: '$25,000.00',effectiveDate: new Date(), underWriter: 'John Smith', lastModified: new Date()},
  {policyId: '007-3200-RU', account: 'AV', product: 'Life Insurance Retire', status: 'Progress', premium: '$25,000.00',effectiveDate: new Date(), underWriter: 'John Smith', lastModified: new Date()},
  {policyId: '007-3200-RU', account: 'AV', product: 'Life Insurance Retire', status: 'Progress', premium: '$25,000.00',effectiveDate: new Date(), underWriter: 'John Smith', lastModified: new Date()},
  {policyId: '007-3200-RU', account: 'AV', product: 'Life Insurance Retire', status: 'Progress', premium: '$25,000.00',effectiveDate: new Date(), underWriter: 'John Smith', lastModified: new Date()},
  {policyId: '007-3200-RU', account: 'AV', product: 'Life Insurance Retire', status: 'Progress', premium: '$25,000.00', effectiveDate: new Date(), underWriter: 'John Smith', lastModified: new Date()},
];