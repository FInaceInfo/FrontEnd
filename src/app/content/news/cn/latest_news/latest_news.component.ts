import { Component, OnInit, Renderer } from '@angular/core';
import { NewsService } from '../../../services/news.service'



@Component({
    moduleId: module.id,
    selector: 'app-content-news-cn-latest_news',
    templateUrl: './latest_news.component.html',
    styleUrls: ['./latest_news.component.css'],
    providers: [NewsService]
})
export class LatestNewsComponent implements OnInit {
    errormsg: string
    content:Object[]
    pages:number
    current_page:number
    connection: any
    queryed: boolean = false


    constructor(private service: NewsService, private render: Renderer) {}
    query() {
        this.service.query_latest_news()
        console.log("query_latest_news")
        let process= document.querySelector(".content .process")
        let table= document.querySelector(".content table")
        this.render.setElementStyle(process, 'display', 'block')
        this.render.setElementStyle(table, 'display', 'none')
        this.queryed = true


    }
    ngOnInit() {
        this.connection = this.service.get_news("latest_news").subscribe(message => {
            console.log(message)
            if (message["error"]) {
                this.errormsg = message["message"]
            } else {
                this.content = message["result"]
                this.pages = this.content.length
                let process= document.querySelector(".content .process")
                let table= document.querySelector(".content table")
                this.render.setElementStyle(process, 'display', 'none')
                this.render.setElementStyle(table, 'display', 'block')
            }
        })
        if(this.queryed === false){
            this.service.query_latest_news()
            console.log("query_latest_news")
            this.queryed = true
        }
    }
    ngOnDestroy() {
        this.connection.unsubscribe()
    }
}
