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
    {policyId: '007-3200-RU', account: 'AV', product: 'Life Insurance Retire', status: 'Progress', premium: '$25,000.00',effectiveDate: new Date(), underWriter: 'John Smith', lastModified: new Date()},
  ];

  constructor() { }


  getCategories() {
    return this.ELEMENT_DATA;
  }
}
