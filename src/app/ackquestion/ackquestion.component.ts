import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';
import { SujetService } from '../sujet.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-ackquestion',
  templateUrl: './ackquestion.component.html',
  styleUrls: ['./ackquestion.component.css']
})
export class AckquestionComponent implements OnInit {
  categories;
  userID: any;
  categorie: any;
  content: any;
  titre: any;

  constructor(private router: Router, private cate: CategoriesService, private suj: SujetService, private auth: LoginService) { }

  ngOnInit() {

    this.cate.getCategories().subscribe(data => {
      this.categories = data;
      console.log(this.categories);
    });
    this.auth.getIDUSER().subscribe((data) => {
      console.log('ID:', data[0]);
      this.userID = data[0];
    });
  }
  send() {
    this.suj.NewSujet(this.titre, this.content, this.categorie, this.userID)
      .subscribe(
        res => {
          console.log(this.titre, this.content, this.categorie, this.userID);
          this.router.navigate(['/allquestion']);
        });
  }

}
