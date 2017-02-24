import { Component, OnInit, Renderer} from '@angular/core'
import { ActivatedRoute} from  '@angular/router'

import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        
    }
}
