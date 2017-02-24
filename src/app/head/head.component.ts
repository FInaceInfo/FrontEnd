import { Component, OnInit, Output, Input,Renderer,EventEmitter } from '@angular/core';


import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
@Component({
    selector: 'app-head',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
    @Input() groupvalue: string
    @Output() change:EventEmitter<Object> = new EventEmitter()
    constructor(private render: Renderer) { }

    group_value_change(event) {
        //console.log(event)
        this.groupvalue = event.value
        this.change.emit({"value":this.groupvalue});
    }

    ngOnInit() {

    }

}
