var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Renderer } from '@angular/core';
import { NewsService } from '../../../services/news.service';
var LatestNewsComponent = (function () {
    function LatestNewsComponent(service, render) {
        this.service = service;
        this.render = render;
        this.queryed = false;
    }
    LatestNewsComponent.prototype.query = function () {
        this.service.query_latest_news();
        console.log("query_latest_news");
        var process = document.querySelector(".content .process");
        var table = document.querySelector(".content table");
        this.render.setElementStyle(process, 'display', 'block');
        this.render.setElementStyle(table, 'display', 'none');
        this.queryed = true;
    };
    LatestNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this.service.get_news("latest_news").subscribe(function (message) {
            console.log(message);
            if (message["error"]) {
                _this.errormsg = message["message"];
            }
            else {
                _this.content = message["result"];
                _this.pages = _this.content.length;
                var process = document.querySelector(".content .process");
                var table = document.querySelector(".content table");
                _this.render.setElementStyle(process, 'display', 'none');
                _this.render.setElementStyle(table, 'display', 'block');
            }
        });
        if (this.queryed === false) {
            this.service.query_latest_news();
            console.log("query_latest_news");
            this.queryed = true;
        }
    };
    LatestNewsComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    return LatestNewsComponent;
}());
LatestNewsComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'app-content-news-cn-latest_news',
        templateUrl: './latest_news.component.html',
        styleUrls: ['./latest_news.component.css'],
        providers: [NewsService]
    }),
    __metadata("design:paramtypes", [NewsService, Renderer])
], LatestNewsComponent);
export { LatestNewsComponent };
//# sourceMappingURL=../../../../../../../src/app/content/news/cn/latest_news/latest_news.component.js.map