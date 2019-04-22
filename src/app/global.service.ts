import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
Servidor:any;
User:string;
Pass:string;
AlertaData;
Noti:any;
UserData:any;
UserToken;
Item;
Historial=new Array();
public IsLoggin:boolean=false;
public RestDefinitions:any;
  constructor() {
    this.RestDefinitions={
      Success:100
    }
   }
}
