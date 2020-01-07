import { Directive, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Login } from './login';
import { UserDataService } from '../services/user-data.service';
import { UserDataClass } from '../services/user-data-class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usersData : UserDataClass[] = [];
  user : Login = {
    username : "",
    password : ""
  };

  constructor(private _userDataService : UserDataService) { }

  ngOnInit() {
    this.getUsersData();
  }

  getUsersData () {
    this._userDataService.getUsers().subscribe(
      (data) => {
        this.usersData = data;
        console.log(this.usersData);
      },      
      error => {
        console.log(error);
      })
  }

}

// import { timer } from 'rxjs';
// Timer
// const source = timer(1000, 1000);
// const subscribe = source.subscribe(val => console.log(val));
// setTimeout(() => { subscribe.unsubscribe(); }, 10000);
