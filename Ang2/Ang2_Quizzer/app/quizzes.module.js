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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var quizzes_component_1 = require('./quizzes.component');
var quizInRun_component_1 = require('./quizInRun.component');
var appRoutes = [
    { path: 'quizzes', component: quizzes_component_1.QuizzesComponent },
    { path: 'quizzes/:id', component: quizInRun_component_1.QuizInRunComponent },
    { path: '', component: quizzes_component_1.QuizzesComponent }
];
var QuizzesModule = (function () {
    function QuizzesModule() {
    }
    QuizzesModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
            declarations: [app_component_1.AppComponent, quizzes_component_1.QuizzesComponent, quizInRun_component_1.QuizInRunComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], QuizzesModule);
    return QuizzesModule;
}());
exports.QuizzesModule = QuizzesModule;
//# sourceMappingURL=quizzes.module.js.map