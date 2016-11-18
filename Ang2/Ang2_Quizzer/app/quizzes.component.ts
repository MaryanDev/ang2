import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpService } from './http.service';
import { QuizInfo } from './QuizInfo';

@Component({
    selector: 'quizzes',
    templateUrl: 'templates/quizzes.html',
    styleUrls: ['app/quizzes.component.css'],
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