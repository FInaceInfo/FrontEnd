var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, Input, Renderer, EventEmitter } from '@angular/core';
var HeadComponent = (function () {
    function HeadComponent(render) {
        this.render = render;
        this.change = new EventEmitter();
    }
    HeadComponent.prototype.group_value_change = function (event) {
        this.groupvalue = event.value;
        this.change.emit({ "value": this.groupvalue });
    };
    HeadComponent.prototype.ngOnInit = function () {
    };
    return HeadComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], HeadComponent.prototype, "groupvalue", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], HeadComponent.prototype, "change", void 0);
HeadComponent = __decorate([
    Component({
        selector: 'app-head',
        templateUrl: './head.component.html',
        styleUrls: ['./head.component.css']
    }),
    __metadata("design:paramtypes", [Renderer])
], HeadComponent);
export { HeadComponent };
//# sourceMappingURL=../../../../src/app/head/head.component.js.map