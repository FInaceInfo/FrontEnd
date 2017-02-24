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
            { value: '12', viewValue: '12' }
        ];
        this.days = [
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
            { value: '13', viewValue: '13' },
            { value: '14', viewValue: '14' },
            { value: '15', viewValue: '15' },
            { value: '16', viewValue: '16' },
            { value: '17', viewValue: '17' },
            { value: '18', viewValue: '18' },
            { value: '19', viewValue: '19' },
            { value: '20', viewValue: '20' },
            { value: '21', viewValue: '21' },
            { value: '22', viewValue: '22' },
            { value: '23', viewValue: '23' },
            { value: '24', viewValue: '24' },
            { value: '25', viewValue: '25' },
            { value: '26', viewValue: '26' },
            { value: '27', viewValue: '27' },
            { value: '28', viewValue: '28' },
            { value: '29', viewValue: '29' },
            { value: '30', viewValue: '30' },
            { value: '31', viewValue: '31' }
        ];
        var now = new Date();
        this.today = {
            "year": now.getFullYear(),
            "month": now.getMonth() + 1,
            "day": now.getDate()
        };
        console.log(this.today);
    }
    CnDayComponent.prototype.query = function () {
        if (this.selectedyear && this.selectedmonth && this.selectedday) {
            var query = this.selectedyear + "-" + this.selectedmonth + '-' + this.selectedday;
            console.log(query);
            this.service.query_day_boxoffice(query);
            console.log("query_day_boxoffice");
        }
        else {
            this.service.query_day_boxoffice();
            console.log("query_day_boxoffice");
        }
        var process = document.querySelector(".content .process");
        var table = document.querySelector(".content table");
        this.render.setElementStyle(process, 'display', 'block');
        this.render.setElementStyle(table, 'display', 'none');
        this.queryed = true;
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
        selector: 'app-content-boxoffice-cn-day',
        templateUrl: './day.component.html',
        styleUrls: ['./day.component.css'],
        providers: [BoxOfficeService]
    }),
    __metadata("design:paramtypes", [BoxOfficeService, Renderer])
], CnDayComponent);
export { CnDayComponent };
//# sourceMappingURL=../../../../../../../src/app/content/boxoffice/cn/day/day.component.js.map