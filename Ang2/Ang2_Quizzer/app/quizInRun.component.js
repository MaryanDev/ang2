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
var router_1 = require('@angular./router');
var http_service_1 = require('./http.service');
var QuizInRunComponent = (function () {
    function QuizInRunComponent(httpService, route) {
        this.httpService = httpService;
        this.route = route;
    }
    QuizInRunComponent.prototype.ngOnInit = function () {
        this.quizId = this.route.queryParams["id"];
    };
    QuizInRunComponent = __decorate([
        core_1.Component({
            selector: 'quiz-in-run',
            templateUrl: 'templates/quizInRun.html',
            styleUrls: ['app/quizInRun.component.css'],
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService, router_1.ActivatedRoute])
    ], QuizInRunComponent);
    return QuizInRunComponent;
}());
exports.QuizInRunComponent = QuizInRunComponent;
//# sourceMappingURL=quizInRun.component.js.map