import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './components/app.component';
import { QuizzesComponent } from './components/quizzes.component';
import { QuizInRunComponent } from './components/quizInRun.component';

const appRoutes: Routes = [
    { path: 'quizzes', component: QuizzesComponent },
    { path: 'quizzes/:id', component: QuizInRunComponent },
    { path: '', component: QuizzesComponent },
    { path: '**', component: QuizzesComponent }
]

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ModalModule.forRoot(),
        BootstrapModalModule
    ],
    declarations: [
        AppComponent,
        QuizzesComponent,
        QuizInRunComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class QuizzesModule {

}