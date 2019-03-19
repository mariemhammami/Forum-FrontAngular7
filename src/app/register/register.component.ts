import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error;
  registerUserData = {};
  constructor(private auth: LoginService, private router: Router) { }

  ngOnInit() {
  }
  registerUser() {
    this.auth.registrationUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(this.registerUserData);
          this.router.navigate(['/login']);
        });
  }
}
