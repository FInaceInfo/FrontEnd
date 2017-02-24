import { Component, OnInit,Renderer } from '@angular/core';


import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(private render: Renderer) { }

  ngOnInit() {
      let value = document.querySelector(".head .example-selected-value").innerHTML
      console.log(value)
      let chiose = document.querySelectorAll(".nav .chiose")
      let boxoffice = document.querySelectorAll(".nav .box-office")
      for (let i = 0; i < chiose.length; i++) {
          this.render.setElementStyle(boxoffice[i], 'display', 'none')
      }
      for (let i = 0; i < boxoffice.length; i++) {
          this.render.setElementStyle(boxoffice[i], 'display', 'block')
      }
  }

}
