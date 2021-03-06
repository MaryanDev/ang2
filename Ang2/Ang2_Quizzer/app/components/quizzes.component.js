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
var http_service_1 = require('../services/http.service');
var QuizzesComponent = (function () {
    function QuizzesComponent(httpService) {
        this.httpService = httpService;
    }
    QuizzesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getAllQuizzes()
            .subscribe(function (data) {
            console.log(data);
            _this.Quizzes = data.json();
        });
    };
    QuizzesComponent = __decorate([
        core_1.Component({
            selector: 'quizzes',
            templateUrl: 'templates/quizzes.html',
            styleUrls: ['app/styles/quizzes.component.css'],
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], QuizzesComponent);
    return QuizzesComponent;
}());
exports.QuizzesComponent = QuizzesComponent;
//# sourceMappingURL=quizzes.component.js.map