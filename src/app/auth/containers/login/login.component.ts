import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Token, User } from '../../models';
import { AuthService } from '../../services';

import * as fromAuth from '../../store/reducers';
import * as Auth from '../../store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {}

  login(username: string, password: string) {
    this.store.dispatch(new Auth.Login({ username, password }));
  }

  logout() {
    this.store.dispatch(new Auth.Logout());
  }
}
