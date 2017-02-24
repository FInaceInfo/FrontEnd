import { NgModule}       from '@angular/core'
import { CommonModule }   from '@angular/common'
import { FormsModule }    from '@angular/forms'
import { MaterialModule } from '@angular/material'

import { BoxOfficeService } from './services/boxoffice.service'


import { WaitingComponent }  from './waiting/waiting.component'
import { CnRealTimeComponent } from './boxoffice/cn/realtime/realtime.component'

import { ContentRoutingModule } from './content-routing.module'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ContentRoutingModule,
        MaterialModule.forRoot(),
    ],
    declarations: [
        WaitingComponent,
        CnRealTimeComponent
    ],
    providers: [
        BoxOfficeService
    ]
})
export class ContentModule { }
