import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  // vars
  email: string;
  password: string;

  constructor(private _authService: AuthService, private router : Router) { }

  ngOnInit() {
  }

  login() {
    this._authService.login(this.email, this.password).then( result => {
      this.router.navigate(['/']);
    }).catch((error) => {
      alert(error.message);
    });
  }
}
