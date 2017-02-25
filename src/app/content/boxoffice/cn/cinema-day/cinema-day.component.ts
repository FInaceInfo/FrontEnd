import { Component, OnInit, Renderer } from '@angular/core';
import { BoxOfficeService } from '../../../services/boxoffice.service'



@Component({
    moduleId: module.id,
    selector: 'app-content-boxoffice-cn-cinema-day',
    templateUrl: './cinema-day.component.html',
    styleUrls: ['./cinema-day.component.css'],
    providers: [BoxOfficeService]
})
export class CnCinemaDayComponent implements OnInit {
    errormsg: string
    lines: Array<string>
    head: Array<string>
    connection: any
    queryed: boolean = false
    selectedyear: string
    today: Object
    charts_option: Object
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
            "month": now.getMonth() + 1,
            "day": now.getDate()
        }
        console.log(this.today)
    }
    query() {
        if (this.selectedyear && this.selectedmonth && this.selectedday) {
            let query = this.selectedyear + "-" + this.selectedmonth + '-' + this.selectedday
            console.log(query)
            this.service.query_day_cinema(query)
            console.log("query_day_cinema")
        } else {
            this.service.query_day_cinema()
            console.log("query_day_cinema")
        }
        let process = document.querySelector(".content .process")
        // let table = document.querySelector(".content table")
        let table = document.querySelector("#chart1")
        let search = document.querySelector(".content .query")
        this.render.setElementStyle(process, 'display', 'block')
        this.render.setElementStyle(table, 'display', 'none')
        this.render.setElementStyle(search, 'display', 'none')
        this.queryed = true
    }
    ngOnInit() {
        this.connection = this.service.get_boxoffice("cn_day_cinema").subscribe(message => {
            console.log(message)
            if (message["error"]) {
                this.errormsg = message["message"]
            } else {
                this.head = message["head"]
                this.lines = message["body"].slice(0, 10)
                console.log(message)
                let beijing = message["body"]
                    .filter((line) => line[3].indexOf("北京") >= 0)
                    .map((line) => parseFloat(line[6]))
                    .reduce((x, y) => x + y).toFixed(2)
                let shanghai = message["body"]
                    .filter((line) => line[3].indexOf("上海") >= 0)
                    .map((line) => parseFloat(line[6]))
                    .reduce((x, y) => x + y).toFixed(2)
                let guangzhou = message["body"]
                    .filter((line) => line[3].indexOf("广州") >= 0)
                    .map((line) => parseFloat(line[6]))
                    .reduce((x, y) => x + y).toFixed(2)
                let shenzhen = message["body"]
                    .filter((line) => line[3].indexOf("深圳") >= 0)
                    .map((line) => parseFloat(line[6]))
                    .reduce((x, y) => x + y).toFixed(2)
                let other = message["body"]
                    .filter((line) => {
                        return line[3].indexOf("深圳") < 0 &&
                            line[3].indexOf("广州") < 0 &&
                            line[3].indexOf("上海") < 0 &&
                            line[3].indexOf("北京") < 0
                    })
                    .map((line) => parseFloat(line[6]))
                    .reduce((x, y) => x + y).toFixed(2)

                this.charts_option = {
                    title: {
                        text: '各地票房贡献度',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        x: 'center',
                        y: 'bottom',
                        data: ['北京', '上海', '广州', '深圳', '其他']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: { show: true },
                            dataView: { show: true, readOnly: false },
                            magicType: {
                                show: true,
                                type: ['pie', 'funnel']
                            },
                            restore: { show: true },
                            saveAsImage: { show: true }
                        }
                    },
                    calculable: true,
                    series: [
                        {
                            name: '位置',
                            type: 'pie',
                            radius: '55%',
                            data: [
                                { value: beijing, name: '北京' },
                                { value: shanghai, name: '上海' },
                                { value: guangzhou, name: '广州' },
                                { value: shenzhen, name: '深圳' },
                                { value: other, name: '其他' }
                            ]
                        }
                    ]
                }
                // let table = document.querySelector(".content table")
                let table = document.querySelector("#chart1")
                this.render.setElementStyle(table, 'display', 'block')
                let search = document.querySelector(".content .query")
                this.render.setElementStyle(search, 'display', 'block')
            }
            let process = document.querySelector(".content .process")
            this.render.setElementStyle(process, 'display', 'none')

        })
        if (this.queryed === false) {
            let process = document.querySelector(".content .process")
            this.render.setElementStyle(process, 'display', 'none')
        }
        // if (this.queryed === false) {
        //     this.service.query_day_cinema("2016-11-11")
        //     let search = document.querySelector(".content .query")
        //     this.render.setElementStyle(search, 'display', 'none')
        //     console.log("query_day_cinema")
        // }
    }
    ngOnDestroy() {
        this.connection.unsubscribe()
    }
}
