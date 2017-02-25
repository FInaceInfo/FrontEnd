import { Component,Input,OnChanges,SimpleChanges,Renderer,OnInit} from '@angular/core';
import * as echarts from "echarts"
@Component({
    selector: 'hsz-charts',
    templateUrl: './hsz-charts.component.html',
    styleUrls: ['./hsz-charts.component.css']
})
export class HSZChartsComponent implements OnChanges,OnInit {
    @Input() option:Object
    @Input() id:string = "charts"
    @Input() style:string = "width: 600px;height:400px;"
    constructor(private renderer:Renderer){ }
    ngOnInit(){
        let target = this.renderer.selectRootElement(`.chartmain`)
        console.log("target")
        console.log(target)
        let myChart = echarts.init(target)
        myChart.setOption(this.option)
    }
    ngOnChanges(changes: SimpleChanges) {
        console.log(changes)
        let option = changes['option']['currentValue']
        if (option){
            let target = this.renderer.selectRootElement(`#${this.id} .main`)
            console.log("target")
            console.log(target)
            let myChart = echarts.init(target)
            myChart.setOption(option)
        }

    }
}
