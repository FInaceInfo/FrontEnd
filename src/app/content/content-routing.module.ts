import { NgModule }             from '@angular/core'
import { RouterModule, Routes } from '@angular/router'


import { WaitingComponent }  from './waiting/waiting.component'
import { CnRealTimeComponent } from './boxoffice/cn/realtime/realtime.component'
import { CnMonthComponent } from './boxoffice/cn/month/month.component'
import { CnDayComponent } from './boxoffice/cn/day/day.component'
import { CnCinemaDayComponent } from './boxoffice/cn/cinema-day/cinema-day.component'
import { LatestNewsComponent } from './news/cn/latest_news/latest_news.component'

const contentRoutes: Routes = [
    { path: 'content/waiting', component: WaitingComponent },
    { path: 'content/boxoffice', redirectTo: 'content/boxoffice/cn/realtime', pathMatch: 'full' },
    { path: 'content/boxoffice/cn/realtime', component: CnRealTimeComponent },
    { path: 'content/boxoffice/cn/month', component: CnMonthComponent },
    { path: 'content/boxoffice/cn/day', component: CnDayComponent },
    { path: 'content/boxoffice/cn/cinema-day', component: CnCinemaDayComponent },
    { path: 'content/news', redirectTo: 'content/news/last-news', pathMatch: 'full' },
    { path: 'content/news/last-news', component: LatestNewsComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(contentRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ContentRoutingModule { }
