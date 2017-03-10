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
import { BoxOfficeService } from '../../../services/boxoffice.service';
var CnDayComponent = (function () {
    function CnDayComponent(service, render) {
        this.service = service;
        this.render = render;
        this.queryed = false;
        var now = new Date();
        this.today = {
            "year": now.getFullYear(),
            "month": now.getMonth() + 1,
            "day": now.getDate()
        };
        console.log(this.today);
    }
    CnDayComponent.prototype.query = function () {
    };
    CnDayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this.service.get_boxoffice("cn_box_office_day").subscribe(function (message) {
            _this.head = message["head"];
            _this.lines = message["body"];
            console.log(message);
            var process = document.querySelector(".content .process");
            var table = document.querySelector(".content table");
            _this.render.setElementStyle(process, 'display', 'none');
            _this.render.setElementStyle(table, 'display', 'block');
        });
        if (this.queryed === false) {
            this.service.query_day_boxoffice();
            console.log("query_day_boxoffice");
        }
    };
    CnDayComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    return CnDayComponent;
}());
CnDayComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'app-content-news-cn-news_keywords',
        templateUrl: './news_keywords.component.html',
        styleUrls: ['./news_keywords.component.css'],
        providers: [BoxOfficeService]
    }),
    __metadata("design:paramtypes", [BoxOfficeService, Renderer])
], CnDayComponent);
export { CnDayComponent };
//# sourceMappingURL=../../../../../../../src/app/content/news/cn/news_keywords/news_keywords.component.js.map