import { Directive, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';


import { FormGroup } from '@angular/forms';
import { Login } from './login';
import { UserDataService } from '../services/user-data.service';
// import { Observable } from

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : Login = {
    username : "",
    password : ""
  };

  constructor(private _userDataService : UserDataService) { }

  ngOnInit() {
    // this._userDataService
  }



}
