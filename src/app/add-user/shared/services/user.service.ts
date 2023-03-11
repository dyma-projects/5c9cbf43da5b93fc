import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users? : BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  constructor() { }

  addUsers(userName:string):void{
    this.users.value.push(userName);
  }

  getUsers():BehaviorSubject<string[]>{
    return this.users;
  }

}
