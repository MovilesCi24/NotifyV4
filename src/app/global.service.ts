import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
Servidor:any;
User:string;
Pass:string;
public IsLoggin:boolean=false;
public RestDefinitions:any;
  constructor() {
    this.RestDefinitions={
      Success:100
    }
   }
}
