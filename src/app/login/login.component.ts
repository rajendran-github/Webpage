import { Directive, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';

import { Login } from './login';
import { UserDataService } from '../services/user-data.service';
import { UserDataClass } from '../services/user-data-class';
import { map, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usersData : UserDataClass[] = null;
  unknownUser : boolean = true;
  user : Login = {
    username : "",
    password : ""
  };

  constructor(private _userDataService : UserDataService, private _route : Router) { }

  ngOnInit() {
    if (this.usersData == null) {
      this.getUsersData();
    }
  }

  getUsersData () {
    this._userDataService.getUsers().subscribe(
      (data) => {
        this.usersData = data;
        console.log(this.usersData);
      },
      error => {
        alert("Error getting data from the server, Please refresh to continue");
        console.log(error);
      })
  }

  loginSubmit(data) {
    console.log(data.value);
    if (this.usersData.filter( usDt => {
      if (data.value.username == usDt.username && data.value.password == usDt.password)
        return usDt; }).length > 0) {
      this._userDataService.setUserLoggedIn = true;
      this._route.navigate(['/Home']);
    }
    else {
      alert("Not Exist");
    }
  }

}

// import { timer } from 'rxjs';
// Timer
// const source = timer(1000, 1000);
// const subscribe = source.subscribe(val => console.log(val));
// setTimeout(() => { subscribe.unsubscribe(); }, 10000);
