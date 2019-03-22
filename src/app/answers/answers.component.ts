import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SujetService } from '../sujet.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  sujet;
  id;
  constructor(private route: ActivatedRoute, private router: Router,
     private cate: CategoriesService, private suj: SujetService,
     private auth: LoginService ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.suj.getQuestionFromID(this.id).subscribe(data => {
      this.sujet = data;
      console.log(this.sujet);
    });
  }

}
