"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var _1 = require('angular2-modal/plugins/bootstrap/');
var http_service_1 = require('../services/http.service');
var Question_1 = require('../models/Question');
var UserResult_1 = require('../models/UserResult');
var QuizInRunComponent = (function () {
    function QuizInRunComponent(httpService, route, vcRef, modal) {
        this.httpService = httpService;
        this.route = route;
        this.modal = modal;
        this.currentQuestion = new Question_1.Question();
        this.userResult = new UserResult_1.UserResult();
        this.currentQuestionId = 0;
        //modal.defaultViewContainer = vcRef;
    }
    QuizInRunComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.quizId = param['id'];
            _this.userResult.QuizId = _this.quizId;
            console.log(_this.quizId);
        });
        this.httpService.getQuestionsForQuiz(this.quizId)
            .subscribe(function (data) {
            console.log(data);
            _this.Questions = data.json();
            _this.userResult.Questions = _this.Questions;
            _this.currentQuestion = _this.Questions[0];
        });
    };
    QuizInRunComponent.prototype.setCurrentQuestion = function (newCurrent) {
        this.userResult.Questions[this.currentQuestionId].UsersChoice = this.Questions[this.currentQuestionId].UsersChoice;
        console.log(this.userResult);
        this.currentQuestionId = newCurrent;
        this.currentQuestion = this.Questions[newCurrent];
    };
    QuizInRunComponent.prototype.finishQuiz = function () {
        this.modal.confirm()
            .size('sm')
            .showClose(true)
            .title("Confirm finising")
            .okBtn("Yes").cancelBtn("No")
            .body("<h3>Are you sure want to finish the quiz?</h3>")
            .open();
        this.httpService.sendResult(this.userResult).subscribe(function (data) {
            console.log("sended");
        });
    };
    QuizInRunComponent = __decorate([
        core_1.Component({
            selector: 'quiz-in-run',
            templateUrl: 'templates/quizInRun.html',
            styleUrls: ['app/styles/quizInRun.component.css'],
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService, router_1.ActivatedRoute, core_1.ViewContainerRef, _1.Modal])
    ], QuizInRunComponent);
    return QuizInRunComponent;
}());
exports.QuizInRunComponent = QuizInRunComponent;
//# sourceMappingURL=quizInRun.component.js.map