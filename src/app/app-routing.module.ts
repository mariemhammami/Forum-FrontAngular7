import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ForumComponent } from './forum/forum.component';
import { AuthGuard } from './auth.guard';
import { CategoriesComponent } from './categories/categories.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AllQuestionComponent } from './all-question/all-question.component';
import { AckquestionComponent } from './ackquestion/ackquestion.component';

const routes: Routes = [
{ path: 'login', component: AuthentificationComponent },
{ path: 'forum', component: ForumComponent, canActivate : [AuthGuard] },
{ path: 'categories', component: CategoriesComponent},
{ path: 'registration', component: RegisterComponent},
{ path: 'navbar', component: NavbarComponent},
{ path: 'footer', component: FooterComponent},
{ path: 'header', component: HeaderComponent},
{ path: 'allquestion', component: AllQuestionComponent},
{ path: 'askquestion', component: AckquestionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
