import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, Routes, ActivatedRoute } from '@angular./router';
import { HttpService } from './http.service';

@Component({
    selector: 'quiz-in-run',
    templateUrl: 'templates/quizInRun.html',
    styleUrls: ['app/quizInRun.component.css'],
    providers: [HttpService]
})
export class QuizInRunComponent implements OnInit {

    private quizId: number;
    constructor(private httpService: HttpService, private route: ActivatedRoute) {
        
    }
    ngOnInit() {
        this.quizId = this.route.queryParams["id"];
    }
}