import { Component } from "@angular/core";

@Component ({
    selector: '.app-successAlert',
    //selector: ' [app-successAlert]',
    //selector: 'app-successAlert',
    template: ` <h4>Sucess! you made it.</h4>
                <hr> 
                <app-warning-alert></app-warning-alert>
                `,
    styles: [`  h4 {
                    color: blue;
                    padding: 60px;
                }`]
})



export class SucessAlertComponent {

}