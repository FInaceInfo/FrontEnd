import { Component, OnInit, Renderer } from '@angular/core';
import { BoxOfficeService } from '../../../services/boxoffice.service'

@Component({
    moduleId: module.id,
    selector: 'app-content-news-cn-news_keywords',
    templateUrl: './news_keywords.component.html',
    styleUrls: ['./news_keywords.component.css'],
    providers: [BoxOfficeService]
})
export class CnDayComponent implements OnInit {
    lines: Array<string>
    head: Array<string>
    connection: any
    queryed: boolean = false
    selectedyear: string
    today: Object

    constructor(private service: BoxOfficeService, private render: Renderer) {
        let now = new Date()
        this.today = {
            "year": now.getFullYear(),
            "month": now.getMonth()+1,
            "day": now.getDate()
        }
        console.log(this.today)
    }
    query() {
    }
    ngOnInit() {
        this.connection = this.service.get_boxoffice("cn_box_office_day").subscribe(message => {
            this.head = message["head"]
            this.lines = message["body"]
            console.log(message)
            let process = document.querySelector(".content .process")
            let table = document.querySelector(".content table")
            this.render.setElementStyle(process, 'display', 'none')
            this.render.setElementStyle(table, 'display', 'block')
        })
        if (this.queryed === false) {
            this.service.query_day_boxoffice()
            console.log("query_day_boxoffice")
        }
    }
    ngOnDestroy() {
        this.connection.unsubscribe()
    }
}
