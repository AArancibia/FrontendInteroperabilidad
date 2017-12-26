import { Component, OnInit } from '@angular/core';
import {UserCredencial} from "../../entities/user-credencial";
import {PideService} from "../../services/pide.service";
import {ComunicatorService} from "../../services/comunicator.service";

@Component({
  selector: 'app-actualizar-credencial',
  templateUrl: './actualizar-credencial.component.html',
  styleUrls: ['./actualizar-credencial.component.less']
})
export class ActualizarCredencialComponent implements OnInit {
 userCredencial:UserCredencial;
 datos:any;
  constructor(private pide:PideService, private logger: ComunicatorService) {
    this.userCredencial = new UserCredencial;
  }

  ngOnInit() {
  }
  actualizar(){
    this.pide.getDataUrlWithinBody(this.userCredencial,'buscardni').then(res=>{
      this.datos = res.json();
      console.log(this.datos);
    },err=>{
      this.logger.addLogMessage({tipo:"error",message:err});
    });
  }

}
