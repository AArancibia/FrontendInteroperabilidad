import { Component, OnInit } from '@angular/core';
import {BuscarNaveAeronaveService} from "../../services/buscar-nave-aeronave.service";

@Component({
  selector: 'app-buscar-nave-aeronave',
  templateUrl: './buscar-nave-aeronave.component.html',
  styleUrls: ['./buscar-nave-aeronave.component.less']
})
export class BuscarNaveAeronaveComponent implements OnInit {
  datos:any;

  constructor(private buscarNave: BuscarNaveAeronaveService){

  }
 getNaveAeronave(matricula){
   this.buscarNave.getNave(matricula).then(res=>{
      this.datos=res;
   });
 }
  ngOnInit() {
  }

}
