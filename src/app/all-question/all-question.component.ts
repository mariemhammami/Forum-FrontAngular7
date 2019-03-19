import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';
import { SujetService } from '../sujet.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-all-question',
  templateUrl: './all-question.component.html',
  styleUrls: ['./all-question.component.css']
})
export class AllQuestionComponent implements OnInit {
  sujet;

  constructor(private router: Router, private cate: CategoriesService, private suj: SujetService, private auth: LoginService) { }

  ngOnInit() {

    this.suj.getAllquestion().subscribe(data => {
      this.sujet = data;
      console.log(this.sujet);
    });
  }

}
