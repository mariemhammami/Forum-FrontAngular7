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
export class CommentaireService {
  CURL = 'http://127.0.0.1:8000/commentaire/new';
  constructor(private http: HttpClient, private router: Router) { }
  public NewCommentaire(titre, cont, idcat, iduser): any {
    const obj = {
      titre_sujet: titre,
      contenu: cont,
      id_cat: idcat,
      id_user: iduser
    };
    return this.http.post<any>(this.CURL, obj);
  }

  public getAllCommentaire() {
    //return this.http.get(this.getsujet);

  }



}
