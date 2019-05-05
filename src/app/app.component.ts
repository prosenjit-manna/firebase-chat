import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-firebase-chat';
  isLoggedIn: boolean;

  constructor(
    private authService: AuthService
  ) {

  }

  ngOnInit() {
    this.authService.getAfUser().subscribe(user => {
      if (user.getIdToken()) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }
}
