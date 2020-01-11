import { Component } from '@angular/core';

import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Webpage';

  navBarOpen = false;

  constructor (private _userDataService : UserDataService) {}

  toggle() {
    this.navBarOpen = !this.navBarOpen;
  }

  isUserLoggedIn() {
    return this._userDataService.getUserLoggedIn;
  }
  logout() {
    this._userDataService.setUserLoggedIn = false;
  }
}
