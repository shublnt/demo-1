import { Component, OnInit } from '@angular/core';
import { single, multi } from '../data.service';

@Component({
  selector: 'app-manager-chart',
  templateUrl: './manager-chart.component.html',
  styleUrls: ['./manager-chart.component.css']
})
export class ManagerChartComponent  {

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Agencies';
  showYAxisLabel = true;
  yAxisLabel = 'Product Class';

  colorScheme = {
    domain: ['#1884B5', '#1BC3F2']
  };

  constructor() {
    Object.assign(this, { single, multi })
  }

  onSelect(event) {
    console.log(event);
  }

}
