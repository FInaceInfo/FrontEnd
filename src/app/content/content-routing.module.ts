import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { WaitingComponent }  from './waiting/waiting.component';

const contentRoutes: Routes = [
  { path: 'content/waiting',component: WaitingComponent }
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
