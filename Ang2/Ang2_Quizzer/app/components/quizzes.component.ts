import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpService } from '../services/http.service';
import { QuizInfo } from '../models/QuizInfo';

@Component({
    selector: 'quizzes',
    templateUrl: 'templates/quizzes.html',
    styleUrls: ['app/styles/quizzes.component.css'],
    providers: [HttpService]
})
export class QuizzesComponent implements OnInit {
    public Quizzes: QuizInfo[];

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        this.httpService.getAllQuizzes()
            .subscribe((data: Response) => {
                console.log(data);
                this.Quizzes = data.json();
            });
    }
}