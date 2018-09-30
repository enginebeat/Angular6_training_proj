import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})

export class ServerComponent{
    serverId : number = 10;
    serverStatus: string = 'Offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColour() {
        /*if (this.serverStatus == 'online'){
            return 'green';
        } else{
            return 'red';
        }*/
        return this.serverStatus === 'offline' ? 'red' : 'green';
    }
}