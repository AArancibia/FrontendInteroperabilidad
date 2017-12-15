import { Component, OnInit } from '@angular/core';
import {Asiento} from "../../entities/asiento";
import {PideService} from "../../services/pide.service";

@Component({
  selector: 'app-listar-asientos',
  templateUrl: './listar-asientos.component.html',
  styleUrls: ['./listar-asientos.component.less']
})
export class ListarAsientosComponent implements OnInit {
asiento:Asiento;
  constructor(private pide: PideService) {
    this.asiento= new Asiento();
  }

  ngOnInit() {
  }
  buscarAsiento(){
    this.pide.getData(this.asiento,"listarAsientos").then((res)=>{
      console.log(res);
    })
  }
}
