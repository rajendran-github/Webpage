import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';

import { UserDataService } from '../services/user-data.service';
import { UserDataClass } from '../services/user-data-class';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private userData = new UserDataClass();
  constructor(private _userDataService : UserDataService) { }

  ngOnInit() {
  }

}
