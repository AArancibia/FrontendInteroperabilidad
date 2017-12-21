import { Component, OnInit } from '@angular/core';
import {BuscarNaveAeronaveService} from "../../services/buscar-nave-aeronave.service";
import {PideService} from "../../services/pide.service";
import {ComunicatorService} from "../../services/comunicator.service";

@Component({
  selector: 'app-buscar-nave-aeronave',
  templateUrl: './buscar-nave-aeronave.component.html',
  styleUrls: ['./buscar-nave-aeronave.component.less']
})
export class BuscarNaveAeronaveComponent implements OnInit {
  datos:any;

  constructor(private pide:PideService, private logger:ComunicatorService){

  }
 getNaveAeronave(matricula){

   this.pide.getDataUrlWithoutBody(matricula,"aeronave").then((res)=>{
     this.datos= res.json().respuestaNaveAeronave[0];

   },err=>{
     this.logger.addLogMessage({tipo:"error",message:err});
   })
   // this.buscarNave.getNave(matricula).then(res=>{
   //    this.datos=res;
   // });
 }
  ngOnInit() {

  }

}
