import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { UserDataClass } from './user-data-class'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private baseUrl = "http://localhost:3000/users";
  constructor(private _httpClient : HttpClient) { }

  // getUsers () : Observable<UserDataClass>{
  //   return this._httpClient.get<UserDataClass>(baseUrl);
  // }
  //
  // postUser(data) : Observable<UserDataClass> {
  //   return this._httpClient.post<UserDataClass>(data);
  // }
}
