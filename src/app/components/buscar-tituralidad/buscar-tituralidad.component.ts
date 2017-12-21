import { Component, OnInit } from '@angular/core';
import {Titular} from "../../entities/titular";
import {BuscarTitularidadService} from "../../services/buscar-titularidad.service";
import {PideService} from "../../services/pide.service";
import {ComunicatorService} from "../../services/comunicator.service";

@Component({
  selector: 'app-buscar-tituralidad',
  templateUrl: './buscar-tituralidad.component.html',
  styleUrls: ['./buscar-tituralidad.component.less']
})
export class BuscarTituralidadComponent implements OnInit {
titular:Titular;
datos:any;
isNatural=true;
  constructor(private pide:PideService, private logger: ComunicatorService) {
    this.titular = new Titular();
  }

  ngOnInit() {
  }

  buscarTitularidad(){
    if(!this.titular.tipoParticipante){
      this.titular.tipoParticipante="";
    }
    if(!this.titular.apellidoMaterno){
      this.titular.apellidoMaterno="";
    }
    if(!this.titular.apellidoPaterno){
      this.titular.apellidoPaterno="";
    }
    if(!this.titular.nombres){
      this.titular.nombres="";
    }
    if(!this.titular.razonSocial){
      this.titular.razonSocial="";
    }

    this.pide.getDataUrlWithinBody(this.titular,'titularidad').then(res=>{
      this.datos = res.json().respuestaTitularidad;
      console.log(this.datos);
    },err=>{
      this.logger.addLogMessage({tipo:"error",message:err});

    });
    // this.titularService.getTitularidad({
    //   tipoParticipante:this.titular.tipoParticipante,
    //   apellidoPaterno:this.titular.apellidoPaterno,
    //   apellidoMaterno:this.titular.apellidoMaterno,
    //   nombres:this.titular.nombres,
    //   razonSocial:this.titular.razonSocial
    // }).then(
    //   (res)=>{
    //   console.log(JSON.stringify(this.datos));
    //   this.datos=res.buscarTitularidadResponse.respuestaTitularidad.respuestaTitularidad;
    //
    // },(err)=>{
    //   console.log(err);
    // });



  }
 cambiarPersona(tipo:string){
      this.isNatural = (tipo==="J")?false:true;
 }
}
