import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  username: string;
  password: string;
  loginError: string;
  error: string;


  public loginUserData = {};

  constructor(private auth: LoginService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this.auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        console.log(res.token);
        this.router.navigate(['/']);
      },
       loginError => this.error = loginError.message + '  verify  your username or password !  ')
    ;
  }


}
