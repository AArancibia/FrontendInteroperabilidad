import { Component } from '@angular/core';
import {BuscarNaveAeronaveService} from "./services/buscar-nave-aeronave.service";
import {ComunicatorService} from "./services/comunicator.service";
import {LogMessage} from "./entities/log-message";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  log:LogMessage[];
  constructor(private buscarNave: BuscarNaveAeronaveService, private logger: ComunicatorService){
    this.log = [];
    logger.logMessage.subscribe(message=>{
     this.addLog(message);
    })
  }

  addLog(dato:LogMessage){
      this.log.push(dato)
    setTimeout(()=>{
      this.log.shift();
    },5000)
  }
}
