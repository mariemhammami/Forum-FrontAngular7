import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  URL = 'http://127.0.0.1:8000/categories';

  constructor(private http: HttpClient, private router: Router) { }
  getCategories() {

    return this.http.get(this.URL);
    console.log(this.http.get(this.URL));
  }
}
