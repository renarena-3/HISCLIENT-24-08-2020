import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatacheckserviceService {

  public tableDataObj : any;
  constructor() { }

  set tableDataValue(data:any){
    this.tableDataObj=data;
  }

  get tableDataValue(){
    return this.tableDataObj;
  }
}
