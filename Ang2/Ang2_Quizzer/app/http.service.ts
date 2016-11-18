import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {

    constructor(private http: Http) { }

    getAllQuizzes() {
        return this.http.get('api/quiz')
    }
}