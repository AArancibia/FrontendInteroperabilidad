import { Component, OnInit } from '@angular/core';
import {Titular} from "../../entities/titular";
import {BuscarTitularidadService} from "../../services/buscar-titularidad.service";
import {PideService} from "../../services/pide.service";
import {ComunicatorService} from "../../services/comunicator.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-buscar-tituralidad',
  templateUrl: './buscar-tituralidad.component.html',
  styleUrls: ['./buscar-tituralidad.component.less'],
  animations:[
    trigger('showDetail', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({height: 0}),
        animate(250)
      ]),
      transition('* => void', [
        animate(250, style({height: 0}))
      ])
    ])
  ]
})
export class BuscarTituralidadComponent implements OnInit {
titular:Titular;
datos:any;
isNatural=true;
loadingData=false;
paginas:any;
elxPag = 20;
totalEl:number;
paginaActual:number;
min:number;
max:number;
selectedRow = 0;



  constructor(private pide:PideService, private logger: ComunicatorService) {
    this.titular = new Titular();
  }

  ngOnInit() {
  }

  buscarTitularidad(){
    this.loadingData=true;
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
      this.setupTable(this.datos.length);
      console.log(this.datos);
      this.loadingData=false;
    },err=>{
      this.logger.addLogMessage({tipo:"error",message:err});
      this.loadingData=false;
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

 setupTable(totalel:number){
   this.totalEl=totalel;
   this.paginas=new Array(Math.ceil(this.totalEl/this.elxPag));
   this.setPaginaActual(1);
 }

 setPaginaActual(pagina:number){
   this.paginaActual=pagina;
   this.min=this.elxPag*(this.paginaActual-1);
   this.max=this.elxPag*this.paginaActual-1
 }

 nextPagina(){
   console.log(this.paginaActual<this.paginas)
   if(this.paginaActual<this.paginas.length){
     console.log(this.paginaActual);
     this.setPaginaActual(this.paginaActual+1);
   }
 }

  prevPagina(){
   console.log("anterior")
    if(this.paginaActual>1){
      this.setPaginaActual(this.paginaActual-1);
    }
  }

  selectRow(row:number){
    if(this.selectedRow === row){
      this.selectedRow = 0;
    }else{
      this.selectedRow = row;
    }
  }
}
