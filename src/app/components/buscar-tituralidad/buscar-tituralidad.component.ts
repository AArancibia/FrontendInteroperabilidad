import { Component, OnInit } from '@angular/core';
import {Titular} from "../../entities/titular";
import {BuscarTitularidadService} from "../../services/buscar-titularidad.service";

@Component({
  selector: 'app-buscar-tituralidad',
  templateUrl: './buscar-tituralidad.component.html',
  styleUrls: ['./buscar-tituralidad.component.less']
})
export class BuscarTituralidadComponent implements OnInit {
titular:Titular;
datos:any;
isNatural=true;
  constructor(private titularService:BuscarTitularidadService) {
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
    if(!this.titular.Nombres){
      this.titular.Nombres="";
    }
    if(!this.titular.razonSocial){
      this.titular.razonSocial="";
    }

    this.titularService.getTitularidad({
      tipoParticipante:this.titular.tipoParticipante,
      apellidoPaterno:this.titular.apellidoPaterno,
      apellidoMaterno:this.titular.apellidoMaterno,
      Nombres:this.titular.Nombres,
      razonSocial:this.titular.razonSocial
    }).then(
      (res)=>{
      console.log(JSON.stringify(this.datos));
      this.datos=res.buscarTitularidadResponse.respuestaTitularidad.respuestaTitularidad;

    },(err)=>{
      console.log(err);
    });
  }
 cambiarPersona(tipo:string){
      this.isNatural = (tipo==="J")?false:true;
 }
}
