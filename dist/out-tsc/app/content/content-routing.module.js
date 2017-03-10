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
import { CnMonthComponent } from './boxoffice/cn/month/month.component';
import { CnDayComponent } from './boxoffice/cn/day/day.component';
import { CnCinemaDayComponent } from './boxoffice/cn/cinema-day/cinema-day.component';
import { LatestNewsComponent } from './news/cn/latest_news/latest_news.component';
var contentRoutes = [
    { path: 'content/waiting', component: WaitingComponent },
    { path: 'content/boxoffice', redirectTo: 'content/boxoffice/cn/realtime', pathMatch: 'full' },
    { path: 'content/boxoffice/cn/realtime', component: CnRealTimeComponent },
    { path: 'content/boxoffice/cn/month', component: CnMonthComponent },
    { path: 'content/boxoffice/cn/day', component: CnDayComponent },
    { path: 'content/boxoffice/cn/cinema-day', component: CnCinemaDayComponent },
    { path: 'content/news', redirectTo: 'content/news/last-news', pathMatch: 'full' },
    { path: 'content/news/last-news', component: LatestNewsComponent }
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