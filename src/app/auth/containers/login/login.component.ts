import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IToken, IUser } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login(userName: string, password: string) {
    this.authService.login(userName, password).subscribe((token: IToken) => {
      console.log('token', token);
      console.log('user', this.authService.parseIdTokenToUser(token.id_token));
    });
  }
}
