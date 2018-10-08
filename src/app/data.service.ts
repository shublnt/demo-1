import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  ELEMENT_DATA = [
    {policyId: '007-3200-RU', account: 'AV', product: 'Life Insurance Retire', status: 'Progress', premium: '$25,000.00',effectiveDate: new Date(), underWriter: 'John Smith', lastModified: new Date()},
    {policyId: '007-3200-RU', account: 'AV', product: 'Life Insurance Retire', status: 'Progress', premium: '$25,000.00',effectiveDate: new Date(), underWriter: 'John Smith', lastModified: new Date()},
    {policyId: '007-3200-RU', account: 'AV', product: 'Life Insurance Retire', status: 'Progress', premium: '$25,000.00',effectiveDate: new Date(), underWriter: 'John Smith', lastModified: new Date()},
    {policyId: '007-3200-RU', account: 'AV', product: 'Life Insurance Retire', status: 'Progress', premium: '$25,000.00',effectiveDate: new Date(), underWriter: 'John Smith', lastModified: new Date()},
    {policyId: '007-3200-RU', account: 'AV', product: 'Life Insurance Retire', status: 'Progress', premium: '$25,000.00',effectiveDate: new Date(), underWriter: 'John Smith', lastModified: new Date()},
    {policyId: '007-3200-RU', account: 'AV', product: 'Life Insurance Retire', status: 'Progress', premium: '$25,000.00', effectiveDate: new Date(), underWriter: 'John Smith', lastModified: new Date()},
  ];



  constructor() { }


  getCategories() {
    return this.ELEMENT_DATA;
  }
}

export var single = [
  {
    "name": "Agency",
    "value": 8940000
  },
  {
    "name": "Broker",
    "value": 5000000
  },
  {
    "name": "Direct",
    "value": 7200000
  }
];

export var multi = [
  {
    "name": "Agency",
    "series": [
      {
        "name": "2010",
        "value": 7300000
      },
      {
        "name": "2011",
        "value": 8940000
      }
    ]
  },
  {
    "name": "Broker",
    "series": [
      {
        "name": "2010",
        "value": 7870000
      },
      {
        "name": "2011",
        "value": 8270000
      }
    ]
  },
  {
    "name": "Direct",
    "series": [
      {
        "name": "2010",
        "value": 5000002
      },
      {
        "name": "2011",
        "value": 5800000
      }
    ]
  }
];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}