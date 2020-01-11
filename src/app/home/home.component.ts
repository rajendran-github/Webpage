import { Component, OnInit } from '@angular/core';

import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _userDataService : UserDataService) { }

  ngOnInit() {
  }

  isUserLoggedIn () {
    return this._userDataService.getUserLoggedIn;
  }

}
