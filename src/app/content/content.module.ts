import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { WaitingComponent }  from './waiting/waiting.component';

import { ContentRoutingModule } from './content-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContentRoutingModule,
    MaterialModule.forRoot(),
  ],
  declarations: [
    WaitingComponent
  ]
})
export class ContentModule {}
