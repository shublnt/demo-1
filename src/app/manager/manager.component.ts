import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {DataSource} from '@angular/cdk/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  users$: Object;
  constructor(private data: DataService) { }

  displayedColumns = ['policyId', 'account', 'product', 'status','premium','effectiveDate','underWriter','lastModified'];
  dataSource = this.data.ELEMENT_DATA;
  //selection = new SelectionModel<PeriodicElement>(true, []);

  ngOnInit() {
   //  this.users$ = this.data.ELEMENT_DATA; 
  }



}
