import { Component, OnInit } from '@angular/core';
import {DetalleAsiento} from "../../entities/detalle-asiento";
import {PideService} from "../../services/pide.service";
import {ComunicatorService} from "../../services/comunicator.service";

@Component({
  selector: 'app-ver-detalle-rpv',
  templateUrl: './ver-detalle-rpv.component.html',
  styleUrls: ['./ver-detalle-rpv.component.less']
})
export class VerDetalleRpvComponent implements OnInit {
  detalleAsiento:DetalleAsiento;
  datos:any;
  constructor(private pide:PideService, private logger:ComunicatorService) {
    this.detalleAsiento = new DetalleAsiento();
  }

  ngOnInit() {
  }

  verDetalleAsiento(){

    this.pide.getDataUrlWithinBody(this.detalleAsiento,'detallerpv').then(res=>{
      this.datos = res.json();
      console.log(this.datos);
    },err=>{
      this.logger.addLogMessage({tipo:"error",message:err});

    });
    // this.pide.getData(this.detalleAsiento,"verDetalleRPV").then(res=>{
    //   this.datos=res.Body.verDetalleRPVResponse.vehiculo;
    // },err=>{
    //   this.logger.addLogMessage(err);
    // })
  }
}
