import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  choosed: string = 'box-office'

  choosedChange(event){
      console.log(event)
      this.choosed=event.value
  }
}
