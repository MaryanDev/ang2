import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { UserResult } from '../models/UserResult';

@Injectable()
export class HttpService {

    constructor(private http: Http) { }

    getAllQuizzes() {
        return this.http.get('api/quiz');
    }

    getQuestionsForQuiz(id: number) {
        return this.http.get(`api/quiz/${id}`);
    }

    sendResult(result: UserResult) {
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });

        return this.http.post("api/quiz", result);
    }
}