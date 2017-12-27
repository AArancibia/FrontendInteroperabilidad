import { Component, OnInit } from '@angular/core';
import {PideService} from "../../services/pide.service";
import {parseString} from "xml2js";
import {ComunicatorService} from "../../services/comunicator.service";

@Component({
  selector: 'app-obtener-oficinas',
  templateUrl: './obtener-oficinas.component.html',
  styleUrls: ['./obtener-oficinas.component.less']
})
export class ObtenerOficinasComponent implements OnInit {
 data:any;
 loadingData=false;
  constructor(private pide: PideService, private logger: ComunicatorService) {
    this.obtenerOficinas();
  }

  ngOnInit() {
  }
obtenerOficinas(){
    this.loadingData=true;
    this.pide.getDataUrlWithoutBody("","oficinasreg")
      .then((res)=>{
      this.data=res.json()["soapenv:Envelope"]["soapenv:Header"]["ns2:oficina"].oficina
      // parseString(res.text(),(err,resjs)=>{
      //
      //   this.data=resjs["soapenv:Envelope"]["soapenv:Header"][0]["ns2:oficina"][0].oficina
      //     console.log(this.data);
      // });
        this.loadingData=false;
      console.log(res.text());
    },err=>{
        this.logger.addLogMessage({tipo:"error",message:err});
        this.loadingData=false;
      })
}
}
