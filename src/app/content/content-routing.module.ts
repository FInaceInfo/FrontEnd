import { NgModule }             from '@angular/core'
import { RouterModule, Routes } from '@angular/router'


import { WaitingComponent }  from './waiting/waiting.component'
import { CnRealTimeComponent } from './boxoffice/cn/realtime/realtime.component'

const contentRoutes: Routes = [
    { path: 'content/waiting', component: WaitingComponent },
    { path: 'content/boxoffice', redirectTo: 'content/boxoffice/cn/realtime', pathMatch: 'full' },
    { path: 'content/boxoffice/cn/realtime', component: CnRealTimeComponent }
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
