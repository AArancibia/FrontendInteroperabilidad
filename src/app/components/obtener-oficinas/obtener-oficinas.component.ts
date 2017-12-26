import { Component, OnInit } from '@angular/core';
import {PideService} from "../../services/pide.service";
import {parseString} from "xml2js";

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
    this.pide.getDataUrlWithoutBody("","oficinasreg")
      .then((res)=>{
      parseString(res.text(),(err,resjs)=>{

        this.data=resjs["soapenv:Envelope"]["soapenv:Header"][0]["ns2:oficina"][0].oficina
          console.log(this.data);
      });
      console.log(res.text());
    })
}
}
