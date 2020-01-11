import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { UserDataClass } from './user-data-class'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private baseUrl = "http://localhost:3000/users";
  private userLoggedIn = false;
  private observableData : Observable<UserDataClass[]> = null;
  constructor(private _httpClient : HttpClient) { }

  get getUserLoggedIn() : boolean {
    return this.userLoggedIn;
  }
  set setUserLoggedIn(val : boolean) {
    this.userLoggedIn = val;
  }

  getUsers () : Observable<UserDataClass[]>{
    if (this.observableData == null) {
      console.log("Users get service called");
      this.observableData = this._httpClient.get<UserDataClass[]>(this.baseUrl);
    }
    return this.observableData;
  }

  // postUser(data) : Observable<UserDataClass> {
  //   return this._httpClient.post<UserDataClass>(data);
  // }
}
