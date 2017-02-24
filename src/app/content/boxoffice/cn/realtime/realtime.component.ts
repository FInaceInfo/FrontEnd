import { Component, OnInit,Renderer } from '@angular/core';
import { BoxOfficeService } from '../../../services/boxoffice.service'



@Component({
    moduleId: module.id,
    selector: 'app-content-boxoffice-cn-realtime',
    templateUrl: './realtime.component.html',
    styleUrls: ['./realtime.component.css'],
    providers: [BoxOfficeService]
})
export class CnRealTimeComponent implements OnInit {
    lines:Array<string>
    head:Array<string>
    connection:any
    queryed:boolean = false

    constructor(private service:BoxOfficeService,private render:Renderer) { }

    query(){
        this.service.query_realtime_boxoffice()
        console.log("query_realtime_boxoffice")
        let process= document.querySelector(".content .process")
        let table= document.querySelector(".content table")
        this.render.setElementStyle(process, 'display', 'block')
        this.render.setElementStyle(table, 'display', 'none')
        this.queryed = true
      }
    ngOnInit() {
        this.connection = this.service.get_realtime_boxoffice().subscribe(message => {
            this.head = message["head"].slice(0,-1)
            this.lines = message["body"]
            console.log(message)
            let process= document.querySelector(".content .process")
            let table= document.querySelector(".content table")
            this.render.setElementStyle(process, 'display', 'none')
            this.render.setElementStyle(table, 'display', 'block')
        })
        if(this.queryed === false){
            this.service.query_realtime_boxoffice()
            console.log("query_realtime_boxoffice")
        }
    }
    ngOnDestroy() {
    this.connection.unsubscribe()
  }
}
