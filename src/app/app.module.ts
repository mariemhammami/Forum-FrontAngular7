import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ForumComponent } from './forum/forum.component';
import { ForumService } from './forum.service';
import { LoginService } from './login.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllQuestionComponent } from './all-question/all-question.component';
import { AckquestionComponent } from './ackquestion/ackquestion.component';
import { CategoriesService } from './categories.service';
import { SujetService } from './sujet.service';
import { AnswersComponent } from './answers/answers.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    ForumComponent,
    CategoriesComponent,

    RegisterComponent,

    HeaderComponent,

    FooterComponent,

    SliderComponent,

    NavbarComponent,

    AllQuestionComponent,

    AckquestionComponent,

    AnswersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [LoginService, ForumService, CategoriesService, SujetService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
