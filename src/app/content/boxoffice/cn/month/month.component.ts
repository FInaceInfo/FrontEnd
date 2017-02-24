import { Component, OnInit, Renderer } from '@angular/core';
import { BoxOfficeService } from '../../../services/boxoffice.service'



@Component({
    moduleId: module.id,
    selector: 'app-content-boxoffice-cn-month',
    templateUrl: './month.component.html',
    styleUrls: ['./month.component.css'],
    providers: [BoxOfficeService]
})
export class CnMonthComponent implements OnInit {
    lines: Array<string>
    head: Array<string>
    connection: any
    queryed: boolean = false
    selectedyear: string
    today: Object
    years = [
        { value: '2017', viewValue: '2017' },
        { value: '2016', viewValue: '2016' },
        { value: '2015', viewValue: '2015' }
    ]
    selectedmonth: string
    months = [
        { value: '1', viewValue: '1' },
        { value: '2', viewValue: '2' },
        { value: '3', viewValue: '3' },
        { value: '4', viewValue: '4' },
        { value: '5', viewValue: '5' },
        { value: '6', viewValue: '6' },
        { value: '7', viewValue: '7' },
        { value: '8', viewValue: '8' },
        { value: '9', viewValue: '9' },
        { value: '10', viewValue: '10' },
        { value: '11', viewValue: '11' },
        { value: '12', viewValue: '12' },
    ]

    constructor(private service: BoxOfficeService, private render: Renderer) {
        let now = new Date()
        this.today = {
            "year": now.getFullYear(),
            "month": now.getMonth()+1,
            "day": now.getDate()
        }
    }

    query() {
        if (this.selectedyear && this.selectedmonth) {
            let query = this.selectedyear + "-" + this.selectedmonth
            console.log(query)
            this.service.query_month_boxoffice(query)
            console.log("query_realtime_boxoffice")
        } else {
            this.service.query_month_boxoffice()
            console.log("query_realtime_boxoffice")
        }
        let process = document.querySelector(".content .process")
        let table = document.querySelector(".content table")
        this.render.setElementStyle(process, 'display', 'block')
        this.render.setElementStyle(table, 'display', 'none')
        this.queryed = true
    }
    ngOnInit() {
        this.connection = this.service.get_boxoffice("cn_box_office_month").subscribe(message => {
            this.head = message["head"]
            this.lines = message["body"]
            console.log(message)
            let process = document.querySelector(".content .process")
            let table = document.querySelector(".content table")
            this.render.setElementStyle(process, 'display', 'none')
            this.render.setElementStyle(table, 'display', 'block')
        })
        if (this.queryed === false) {
            this.service.query_month_boxoffice()
            console.log("query_realtime_boxoffice")
        }
    }
    ngOnDestroy() {
        this.connection.unsubscribe()
    }
}
