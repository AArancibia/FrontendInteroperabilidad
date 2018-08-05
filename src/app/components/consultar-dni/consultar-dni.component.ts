import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../entities/usuario";
import {PideService} from "../../services/pide.service";
import {ComunicatorService} from "../../services/comunicator.service";

@Component({
  selector: 'app-consultar-dni',
  templateUrl: './consultar-dni.component.html',
  styleUrls: ['./consultar-dni.component.less']
})
export class ConsultarDniComponent implements OnInit {
usuario:Usuario;
datos:any;
loadingData=false;
imageUrl = "data:image/png;base64";
  constructor(private pide:PideService, private logger: ComunicatorService) {
    this.usuario = new Usuario;
    this.usuario.nuRucUsuario = "20187346488";
    // let dni = "73891928";
    // this.usuario = {nuDniConsulta:dni,nuDniUsuario:dni,nuRucUsuario:"20187346488",password:dni};
    // this.consultar();
  }

  ngOnInit() {
  }
consultar(){
  this.loadingData=true;
  this.pide.getDataUrlWithinBody(this.usuario,'buscardni').then(res=>{
    this.datos = res.json().datosPersona;
    console.log(res.json());
    this.loadingData=false;
    this.logger.addLogMessage({tipo:"success",message:res.json().deResultado});
  },err=>{
    this.logger.addLogMessage({tipo:"error",message:err});
    this.loadingData=false;
  });
}
}
