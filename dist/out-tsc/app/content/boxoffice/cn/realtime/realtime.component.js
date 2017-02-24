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
var CnRealTimeComponent = (function () {
    function CnRealTimeComponent(service, render) {
        this.service = service;
        this.render = render;
        this.queryed = false;
    }
    CnRealTimeComponent.prototype.query = function () {
        this.service.query_realtime_boxoffice();
        console.log("query_realtime_boxoffice");
        var process = document.querySelector(".content .process");
        var table = document.querySelector(".content table");
        this.render.setElementStyle(process, 'display', 'block');
        this.render.setElementStyle(table, 'display', 'none');
        this.queryed = true;
    };
    CnRealTimeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this.service.get_boxoffice("cn_box_office_realtime").subscribe(function (message) {
            _this.head = message["head"].slice(0, -1);
            _this.lines = message["body"].map(function (line) { return line.slice(0, -1); });
            console.log(message);
            var process = document.querySelector(".content .process");
            var table = document.querySelector(".content table");
            _this.render.setElementStyle(process, 'display', 'none');
            _this.render.setElementStyle(table, 'display', 'block');
        });
        if (this.queryed === false) {
            this.service.query_realtime_boxoffice();
            console.log("query_realtime_boxoffice");
        }
    };
    CnRealTimeComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    return CnRealTimeComponent;
}());
CnRealTimeComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'app-content-boxoffice-cn-realtime',
        templateUrl: './realtime.component.html',
        styleUrls: ['./realtime.component.css'],
        providers: [BoxOfficeService]
    }),
    __metadata("design:paramtypes", [BoxOfficeService, Renderer])
], CnRealTimeComponent);
export { CnRealTimeComponent };
//# sourceMappingURL=../../../../../../../src/app/content/boxoffice/cn/realtime/realtime.component.js.map