import { Component, OnInit } from '@angular/core';
import {Asiento} from "../../entities/asiento";
import {PideService} from "../../services/pide.service";
import {ComunicatorService} from "../../services/comunicator.service";

@Component({
  selector: 'app-listar-asientos',
  templateUrl: './listar-asientos.component.html',
  styleUrls: ['./listar-asientos.component.less']
})
export class ListarAsientosComponent implements OnInit {
asiento:Asiento;
datos:any;
loadingData=false;
  constructor(private pide: PideService, private logger:ComunicatorService) {
    this.asiento= new Asiento();
    this.datos=[];

  }

  ngOnInit() {
  }
  buscarAsiento(){
    // this.pide.getData(this.asiento,"listarAsientos").then((res)=>{
    //  this.datos = res.Body.listarAsientosResponse.asientos;
    //   console.log(JSON.stringify(res),res);
    //   this.logger.addLogMessage({tipo:"success",message:"funciono"});
    // },(err)=>{
    //   this.logger.addLogMessage({tipo:"error",message:err});
    // })
      this.loadingData=true;
    this.pide.getDataUrlWithinBody(this.asiento,"asientos").then((res)=>{
      this.datos = res.json();
      console.log(this.datos);
      this.loadingData=false;
      this.logger.addLogMessage({tipo:"success",message:"funciono"});
    },(err)=>{
      this.logger.addLogMessage({tipo:"error",message:err});
      this.loadingData=false;
    })
  }
}
