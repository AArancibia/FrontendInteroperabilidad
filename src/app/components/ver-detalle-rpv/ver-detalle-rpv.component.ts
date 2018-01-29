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
  loadingData=false;
  loadingDataSelect = false;
  dataOficina: any;

  constructor(private pide:PideService, private logger:ComunicatorService) {
    this.detalleAsiento = new DetalleAsiento();
  }

  ngOnInit() {
    this.obtenerOficinas();
  }

  verDetalleAsiento(){
      this.loadingData=true;
    this.pide.getDataUrlWithinBody(this.detalleAsiento,'detallerpv').then(res=>{
      this.datos = res.json();
      console.log(this.datos);
      this.loadingData=false;
    },err=>{
      this.logger.addLogMessage({tipo:"error",message:err});
      this.loadingData=false;

    });
    // this.pide.getData(this.detalleAsiento,"verDetalleRPV").then(res=>{
    //   this.datos=res.Body.verDetalleRPVResponse.vehiculo;
    // },err=>{
    //   this.logger.addLogMessage(err);
    // })
  }
  selectOficina(valOficina:string){

    let dato = valOficina.split("_");
    this.detalleAsiento.oficina=dato[0];
    this.detalleAsiento.zona=dato[1];

  }

  obtenerOficinas(){
    this.loadingDataSelect=true;
    this.pide.getDataUrlWithoutBody("","oficinasreg")
      .then((res)=>{
        this.dataOficina=res.json()["soapenv:Envelope"]["soapenv:Header"]["ns2:oficina"].oficina;
        this.loadingDataSelect=false;
        console.log(this.loadingDataSelect);
      },err=>{
        this.logger.addLogMessage({tipo:"error",message:err});
        this.loadingDataSelect=false;
      })
  }
}
