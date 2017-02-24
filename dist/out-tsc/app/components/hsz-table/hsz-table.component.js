var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var HSZTableComponent = (function () {
    function HSZTableComponent() {
        this.style = "";
        this.title_style = "";
    }
    return HSZTableComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], HSZTableComponent.prototype, "lines", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], HSZTableComponent.prototype, "head", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], HSZTableComponent.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], HSZTableComponent.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], HSZTableComponent.prototype, "title_style", void 0);
HSZTableComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'hsz-table',
        templateUrl: './hsz-table.component.html',
        styleUrls: ['./hsz-table.component.css']
    }),
    __metadata("design:paramtypes", [])
], HSZTableComponent);
export { HSZTableComponent };
//# sourceMappingURL=../../../../../src/app/components/hsz-table/hsz-table.component.js.map