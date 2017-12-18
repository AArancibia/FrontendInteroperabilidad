import { Component, OnInit } from '@angular/core';
import {PideService} from "../../services/pide.service";

@Component({
  selector: 'app-obtener-oficinas',
  templateUrl: './obtener-oficinas.component.html',
  styleUrls: ['./obtener-oficinas.component.less']
})
export class ObtenerOficinasComponent implements OnInit {
 data:any;
  constructor(private pide: PideService) {
    this.obtenerOficinas();
  }

  ngOnInit() {
  }
obtenerOficinas(){
    this.pide.getData({ser:""},"getOficinas").then((res)=>{
      console.log(res);
    })
}
}
