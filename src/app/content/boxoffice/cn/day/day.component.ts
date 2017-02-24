import { Component, OnInit, Renderer } from '@angular/core';
import { BoxOfficeService } from '../../../services/boxoffice.service'



@Component({
    moduleId: module.id,
    selector: 'app-content-boxoffice-cn-day',
    templateUrl: './day.component.html',
    styleUrls: ['./day.component.css'],
    providers: [BoxOfficeService]
})
export class CnDayComponent implements OnInit {
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
        { value: '12', viewValue: '12' }
    ]
    selectedday: string
    days = [
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
        { value: '13', viewValue: '13' },
        { value: '14', viewValue: '14' },
        { value: '15', viewValue: '15' },
        { value: '16', viewValue: '16' },
        { value: '17', viewValue: '17' },
        { value: '18', viewValue: '18' },
        { value: '19', viewValue: '19' },
        { value: '20', viewValue: '20' },
        { value: '21', viewValue: '21' },
        { value: '22', viewValue: '22' },
        { value: '23', viewValue: '23' },
        { value: '24', viewValue: '24' },
        { value: '25', viewValue: '25' },
        { value: '26', viewValue: '26' },
        { value: '27', viewValue: '27' },
        { value: '28', viewValue: '28' },
        { value: '29', viewValue: '29' },
        { value: '30', viewValue: '30' },
        { value: '31', viewValue: '31' }
    ]

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
        if (this.selectedyear && this.selectedmonth && this.selectedday) {
            let query = this.selectedyear + "-" + this.selectedmonth+ '-' + this.selectedday
            console.log(query)
            this.service.query_day_boxoffice(query)
            console.log("query_day_boxoffice")
        } else {
            this.service.query_day_boxoffice()
            console.log("query_day_boxoffice")
        }
        let process = document.querySelector(".content .process")
        let table = document.querySelector(".content table")
        this.render.setElementStyle(process, 'display', 'block')
        this.render.setElementStyle(table, 'display', 'none')
        this.queryed = true
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
