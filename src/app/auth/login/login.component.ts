import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.login()
  }

  login() {
    this.authService.loginWithEmail('prosenjit@itobuz.com', 'abc1212').subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err)
    })
  }

}
