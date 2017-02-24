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
var CnMonthComponent = (function () {
    function CnMonthComponent(service, render) {
        this.service = service;
        this.render = render;
        this.queryed = false;
        this.years = [
            { value: '2017', viewValue: '2017' },
            { value: '2016', viewValue: '2016' },
            { value: '2015', viewValue: '2015' }
        ];
        this.months = [
            { value: '1', viewValue: '1' },
            { value: '2', viewValue: '2' },
            { value: '3', viewValue: '3' },
            { value: '4', viewValue: '4' },
            { value: '5', viewValue: '5' },
            { value: '6', viewValue: '6' },
            { value: '7', viewValue: '7' },
            { value: '8', viewValue: '8' },
            { value: '9', viewValue: '9' },
            { value: '10', viewValue: '10' },
            { value: '11', viewValue: '11' },
            { value: '12', viewValue: '12' },
        ];
        var now = new Date();
        this.today = {
            "year": now.getFullYear(),
            "month": now.getMonth() + 1,
            "day": now.getDate()
        };
    }
    CnMonthComponent.prototype.query = function () {
        if (this.selectedyear && this.selectedmonth) {
            var query = this.selectedyear + "-" + this.selectedmonth;
            console.log(query);
            this.service.query_month_boxoffice(query);
            console.log("query_realtime_boxoffice");
        }
        else {
            this.service.query_month_boxoffice();
            console.log("query_realtime_boxoffice");
        }
        var process = document.querySelector(".content .process");
        var table = document.querySelector(".content table");
        this.render.setElementStyle(process, 'display', 'block');
        this.render.setElementStyle(table, 'display', 'none');
        this.queryed = true;
    };
    CnMonthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this.service.get_boxoffice("cn_box_office_month").subscribe(function (message) {
            _this.head = message["head"];
            _this.lines = message["body"];
            console.log(message);
            var process = document.querySelector(".content .process");
            var table = document.querySelector(".content table");
            _this.render.setElementStyle(process, 'display', 'none');
            _this.render.setElementStyle(table, 'display', 'block');
        });
        if (this.queryed === false) {
            this.service.query_month_boxoffice();
            console.log("query_realtime_boxoffice");
        }
    };
    CnMonthComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    return CnMonthComponent;
}());
CnMonthComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'app-content-boxoffice-cn-month',
        templateUrl: './month.component.html',
        styleUrls: ['./month.component.css'],
        providers: [BoxOfficeService]
    }),
    __metadata("design:paramtypes", [BoxOfficeService, Renderer])
], CnMonthComponent);
export { CnMonthComponent };
//# sourceMappingURL=../../../../../../../src/app/content/boxoffice/cn/month/month.component.js.map