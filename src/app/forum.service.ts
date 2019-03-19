import { Injectable } from '@angular/core';
import {Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Forum} from './forum';
import {LoginService} from './login.service';
@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private uri = 'http://127.0.0.1:8000/forum';



  constructor(private http: Http, private authenticationService: LoginService  ) {}

  getForums(): Observable<any[]> {
    const headers = new Headers({ Authorization: 'Bearer ' + this.authenticationService.token });
    return  this.http.get(this.uri , {headers}).map(res => res.json() as Forum[] ).catch(this.handelError);

  }

   private handelError(error: Response) {

    return Observable.throw(error.json().errors || 'server error');

  }
}
