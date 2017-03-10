import { NgModule}       from '@angular/core'
import { CommonModule }   from '@angular/common'
import { FormsModule }    from '@angular/forms'
import { MaterialModule } from '@angular/material'

import { BoxOfficeService } from './services/boxoffice.service'
import { NewsService } from './services/news.service'

import { WaitingComponent }  from './waiting/waiting.component'
import { CnRealTimeComponent } from './boxoffice/cn/realtime/realtime.component'
import { CnMonthComponent } from './boxoffice/cn/month/month.component'
import { CnDayComponent } from './boxoffice/cn/day/day.component'
import { CnCinemaDayComponent } from './boxoffice/cn/cinema-day/cinema-day.component'
import { LatestNewsComponent } from './news/cn/latest_news/latest_news.component'

import { ContentRoutingModule } from './content-routing.module'

import {HSZTableComponent} from '../components/hsz-table/hsz-table.component'
import {echartsDirective} from '../components/ts-echarts/ts-echart.directive'

@NgModule({
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
export class ContentModule { }
