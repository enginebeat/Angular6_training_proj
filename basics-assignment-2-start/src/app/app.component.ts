import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = '';
  resetBtn = document.querySelector('button');
  
  //buttonDisabled = this.resetBtn.disabled;
  
  
  

  resetUserName() {
    this.userName = '';
    console.log(this.resetBtn.disabled);
    
  }
}
