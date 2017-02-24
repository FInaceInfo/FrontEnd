import { Component, OnChanges, Renderer,Input,SimpleChanges} from '@angular/core'
import { ActivatedRoute} from  '@angular/router'

import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnChanges {
    @Input() choosed:string
    constructor(private renderer:Renderer) {
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes)
        let choises = document.querySelectorAll(".nav .choise")
        let stocks = document.querySelectorAll(".nav .stock")
        let boxoffice = document.querySelectorAll(".nav .box-office")

        let value = changes['choosed']['currentValue']
        switch (value){
            case "stock":{
                for(let i=0;i<choises.length;i++){
                    this.renderer.setElementStyle(choises[i],"display","none")
                }
                for(let i=0;i<stocks.length;i++){
                    this.renderer.setElementStyle(stocks[i],"display","block")
                }
                console.log("stock")
            }
            break
            case "box-office":{
                for(let i=0;i<choises.length;i++){
                    this.renderer.setElementStyle(choises[i],"display","none")
                }
                for(let i=0;i<boxoffice.length;i++){
                    this.renderer.setElementStyle(boxoffice[i],"display","block")
                }
                console.log("box-office")
            }
            break
        }
    }
}
