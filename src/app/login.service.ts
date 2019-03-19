import { Injectable } from '@angular/core';
// import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public token: string;
  loginUrl = 'http://127.0.0.1:8000/login_check';
  registerURL = 'http://127.0.0.1:8000/register';
  user = 'http://127.0.0.1:8000/user';
  constructor(private http: HttpClient, private router: Router) {
  }

  public registrationUser(user): any {
    // console.log(user);

    console.log(user);
    return this.http.post<any>(this.registerURL, user);
  }


  public loginUser(user): Observable<any> {
    return this.http.post<any>(this.loginUrl, user);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/categories']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getIDUSER() {
    const header = new HttpHeaders().append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(this.user, { headers: header });


  }
}
