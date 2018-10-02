import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayContent = false;
  contentDBtn = "Display Content";
  buttonClicks = [];
  clickCounter = 0;
  
  toogleDisplay(event) {
    this.displayContent = this.displayContent ? false : true;
    
    this.contentDBtn = (this.displayContent === true ?  "Hide Content" : "Display Content");

    this.buttonClicks.push({clickNumber : this.clickCounter, timeStamp: event.timeStamp })
    this.clickCounter++;
  }
  changeTextColour() {
    return false;
  }
}
