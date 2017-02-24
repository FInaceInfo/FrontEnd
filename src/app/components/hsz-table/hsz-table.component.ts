import { Component,Input} from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'hsz-table',
    templateUrl: './hsz-table.component.html',
    styleUrls: ['./hsz-table.component.css']
})
export class HSZTableComponent {
    @Input() lines:Array<Array<string>>
    @Input() head:Array<string>
    @Input() title:string
    @Input() style:string = ""
    @Input() title_style:string = ""
    constructor(){ }
}
