import { Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { Modal } from 'angular2-modal/plugins/bootstrap/';
import { HttpService } from '../services/http.service';
import { Question } from '../models/Question';
import { UserResult } from '../models/UserResult';

@Component({
    selector: 'quiz-in-run',
    templateUrl: 'templates/quizInRun.html',
    styleUrls: ['app/styles/quizInRun.component.css'],
    providers: [HttpService]
})
export class QuizInRunComponent implements OnInit {
    public Questions: Question[];
    private quizId: number;
    public currentQuestionId: number;
    public currentQuestion: Question = new Question();
    public userResult: UserResult = new UserResult();

    constructor(private httpService: HttpService, private route: ActivatedRoute, vcRef: ViewContainerRef, public modal: Modal) {
        this.currentQuestionId = 0;
        //modal.defaultViewContainer = vcRef;
    }
    ngOnInit() {
        this.route.params.subscribe(
            (param: any) => {
                this.quizId = param['id'];
                this.userResult.QuizId = this.quizId;
                console.log(this.quizId);
            });
        this.httpService.getQuestionsForQuiz(this.quizId)
            .subscribe((data: Response) => {
                console.log(data);
                this.Questions = data.json();
                this.userResult.Questions = this.Questions;
                this.currentQuestion = this.Questions[0];
            });
    }

    public setCurrentQuestion(newCurrent: number) {
        
        this.userResult.Questions[this.currentQuestionId].UsersChoice = this.Questions[this.currentQuestionId].UsersChoice;
        console.log(this.userResult);
        this.currentQuestionId = newCurrent;
        this.currentQuestion = this.Questions[newCurrent];
    }

    public finishQuiz() {
        this.modal.confirm()
            .size('sm')
            .showClose(true)
            .title("Confirm finising")
            .okBtn("Yes").cancelBtn("No")
            .body(`<h3>Are you sure want to finish the quiz?</h3>`)
            .open();
        this.httpService.sendResult(this.userResult).subscribe((data: Response) => {
            console.log("sended");
        });
    }
}