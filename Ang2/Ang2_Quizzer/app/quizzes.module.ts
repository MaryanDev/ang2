import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuizzesComponent } from './quizzes.component';
import { QuizInRunComponent } from './quizInRun.component';

const appRoutes: Routes = [
    { path: 'quizzes', component: QuizzesComponent },
    { path: 'quizzes/:id', component: QuizInRunComponent },
    { path: '', component: QuizzesComponent }
]

@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, QuizzesComponent, QuizInRunComponent],
    bootstrap: [AppComponent]
})
export class QuizzesModule {

}