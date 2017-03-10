var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Renderer, Input } from '@angular/core';
var NavComponent = (function () {
    function NavComponent(renderer) {
        this.renderer = renderer;
    }
    NavComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        var choises = document.querySelectorAll(".nav .choise");
        var news = document.querySelectorAll(".nav .news");
        var boxoffice = document.querySelectorAll(".nav .box-office");
        var value = changes['choosed']['currentValue'];
        switch (value) {
            case "news":
                {
                    for (var i = 0; i < choises.length; i++) {
                        this.renderer.setElementStyle(choises[i], "display", "none");
                    }
                    for (var i = 0; i < news.length; i++) {
                        this.renderer.setElementStyle(news[i], "display", "block");
                    }
                    console.log("new");
                }
                break;
            case "box-office":
                {
                    for (var i = 0; i < choises.length; i++) {
                        this.renderer.setElementStyle(choises[i], "display", "none");
                    }
                    for (var i = 0; i < boxoffice.length; i++) {
                        this.renderer.setElementStyle(boxoffice[i], "display", "block");
                    }
                    console.log("box-office");
                }
                break;
        }
    };
    return NavComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NavComponent.prototype, "choosed", void 0);
NavComponent = __decorate([
    Component({
        selector: 'app-nav',
        templateUrl: './nav.component.html',
        styleUrls: ['./nav.component.css']
    }),
    __metadata("design:paramtypes", [Renderer])
], NavComponent);
export { NavComponent };
//# sourceMappingURL=../../../../src/app/nav/nav.component.js.map