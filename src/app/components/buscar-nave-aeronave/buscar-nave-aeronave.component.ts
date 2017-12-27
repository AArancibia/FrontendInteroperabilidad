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
  loadingData=false;

  constructor(private pide:PideService, private logger:ComunicatorService){

  }
 getNaveAeronave(matricula){
  this.loadingData=true;
   this.pide.getDataUrlWithoutBody(matricula,"ae" +
     "ronave").then((res)=>{
     this.datos= res.json().respuestaNaveAeronave[0];
     this.loadingData=false;
   },err=>{
     this.logger.addLogMessage({tipo:"error",message:err});
     this.loadingData=false;
   })
   // this.buscarNave.getNave(matricula).then(res=>{
   //    this.datos=res;
   // });
 }
  ngOnInit() {

  }

}
