import {Component, OnInit} from '@angular/core';
import {BuscarNaveAeronaveService} from "./services/buscar-nave-aeronave.service";
import {ComunicatorService} from "./services/comunicator.service";
import {LogMessage} from "./entities/log-message";
import {ActivatedRoute, NavigationEnd, Router, UrlSegment} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'app';
  log:LogMessage[];
  operacionActual = "inicio";
  constructor(private buscarNave: BuscarNaveAeronaveService, private logger: ComunicatorService,private route: ActivatedRoute,private router: Router){
    this.log = [];
    console.log(this.operacionActual);
    logger.logMessage.subscribe(message=>{
     this.addLog(message);
    })
  }
  ngOnInit(){
    this.router.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        this.operacionActual= val.url;
      }

    })

    this.route.url.subscribe((url: UrlSegment[])=> {
      this.operacionActual = url[url.length-1].path
      console.log(url);
    });
  }

  addLog(dato:LogMessage){
      this.log.push(dato)
    setTimeout(()=>{
      this.log.shift();
    },10000)
  }
}
