import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  // vars
  email: String;
  password: String;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.email);
    console.log(this.password);

    this.router.navigate(['/']);
  }

}
