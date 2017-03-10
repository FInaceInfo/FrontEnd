var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BoxOfficeService } from './services/boxoffice.service';
import { NewsService } from './services/news.service';
import { WaitingComponent } from './waiting/waiting.component';
import { CnRealTimeComponent } from './boxoffice/cn/realtime/realtime.component';
import { CnMonthComponent } from './boxoffice/cn/month/month.component';
import { CnDayComponent } from './boxoffice/cn/day/day.component';
import { CnCinemaDayComponent } from './boxoffice/cn/cinema-day/cinema-day.component';
import { LatestNewsComponent } from './news/cn/latest_news/latest_news.component';
import { ContentRoutingModule } from './content-routing.module';
import { HSZTableComponent } from '../components/hsz-table/hsz-table.component';
import { echartsDirective } from '../components/ts-echarts/ts-echart.directive';
var ContentModule = (function () {
    function ContentModule() {
    }
    return ContentModule;
}());
ContentModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ContentRoutingModule,
            MaterialModule.forRoot(),
        ],
        declarations: [
            WaitingComponent,
            CnRealTimeComponent,
            HSZTableComponent,
            echartsDirective,
            CnMonthComponent,
            CnDayComponent,
            CnCinemaDayComponent,
            LatestNewsComponent
        ],
        providers: [
            BoxOfficeService,
            NewsService
        ]
    })
], ContentModule);
export { ContentModule };
//# sourceMappingURL=../../../../src/app/content/content.module.js.map