import { Component, OnInit } from '@angular/core';
import {VistaAsiento} from "../../entities/vista-asiento";
import {PideService} from "../../services/pide.service";
import {ComunicatorService} from "../../services/comunicator.service";

@Component({
  selector: 'app-ver-asiento',
  templateUrl: './ver-asiento.component.html',
  styleUrls: ['./ver-asiento.component.less']
})
export class VerAsientoComponent implements OnInit {
vistaAsiento:VistaAsiento;
datos:any
  constructor(private pide: PideService, private logger:ComunicatorService) {
    this.vistaAsiento = new VistaAsiento();

  }

  ngOnInit() {
  }
  verAsiento(){
    this.pide.getData(this.vistaAsiento,"verAsiento").then(res=>{
      this.datos = res.Body.verAsientoResponse;
    }, err=>{
      this.logger.addLogMessage(err);
    })
  }
}
