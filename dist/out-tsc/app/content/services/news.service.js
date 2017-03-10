var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
var NewsService = (function () {
    function NewsService() {
        this.url = 'ws://localhost:5001/finance_news';
    }
    NewsService.prototype.connect = function () {
        console.log("Connected to \"" + this.url + "\"");
    };
    NewsService.prototype.disconnect = function () {
        console.log("Disconnected from \"" + this.url + "\"");
    };
    NewsService.prototype.error = function (error) {
        console.log("ERROR: \"" + error + "\" (" + this.url + ")");
    };
    NewsService.prototype.get_news = function (api) {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket = io(_this.url);
            _this.socket.on("connect", function () { return _this.connect(); });
            _this.socket.on("disconnect", function () { return _this.disconnect(); });
            _this.socket.on("error", function (error) { return _this.error(error); });
            _this.socket.on(api, function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    NewsService.prototype.query_latest_news = function () {
        this.socket.emit('latest_news', { 'query': "ok" });
    };
    NewsService.prototype.query_news_keywords = function () {
        this.socket.emit('news_keywords', { 'query': "ok" });
    };
    return NewsService;
}());
NewsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], NewsService);
export { NewsService };
//# sourceMappingURL=../../../../../src/app/content/services/news.service.js.map