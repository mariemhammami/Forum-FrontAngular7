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
export class SujetService {
  SujetUrl = 'http://127.0.0.1:8000/sujet/new';
getsujet = 'http://127.0.0.1:8000/sujet';
  constructor(private http: HttpClient, private router: Router) { }
  public NewSujet(titre, cont, idcat, iduser): any {
    const obj = {
      titre_sujet: titre,
      contenu: cont,
      id_cat: idcat,
      id_user: iduser
    };
    return this.http.post<any>(this.SujetUrl, obj);
  }

  public getAllquestion() {
    return this.http.get(this.getsujet);

  }


}
