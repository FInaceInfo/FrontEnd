var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WaitingComponent } from './waiting/waiting.component';
import { CnRealTimeComponent } from './boxoffice/cn/realtime/realtime.component';
var contentRoutes = [
    { path: 'content/waiting', component: WaitingComponent },
    { path: 'content/boxoffice', redirectTo: 'content/boxoffice/cn/realtime', pathMatch: 'full' },
    { path: 'content/boxoffice/cn/realtime', component: CnRealTimeComponent }
];
var ContentRoutingModule = (function () {
    function ContentRoutingModule() {
    }
    return ContentRoutingModule;
}());
ContentRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild(contentRoutes)
        ],
        exports: [
            RouterModule
        ]
    })
], ContentRoutingModule);
export { ContentRoutingModule };
//# sourceMappingURL=../../../../src/app/content/content-routing.module.js.map