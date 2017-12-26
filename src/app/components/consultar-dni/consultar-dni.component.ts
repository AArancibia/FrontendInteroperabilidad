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
  constructor(private pide:PideService, private logger: ComunicatorService) {
    this.usuario = new Usuario;
  }

  ngOnInit() {
  }
consultar(){


  this.pide.getDataUrlWithinBody(this.usuario,'buscardni').then(res=>{
    this.datos = res.json();
    console.log(this.datos);
  },err=>{
    this.logger.addLogMessage({tipo:"error",message:err});
  });
}
}
