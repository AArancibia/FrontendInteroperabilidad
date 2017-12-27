import { Component, OnInit } from '@angular/core';
import {PideService} from "../../services/pide.service";
import {ComunicatorService} from "../../services/comunicator.service";

@Component({
  selector: 'app-buscar-pjrazon-social',
  templateUrl: './buscar-pjrazon-social.component.html',
  styleUrls: ['./buscar-pjrazon-social.component.less']
})
export class BuscarPJRazonSocialComponent implements OnInit {
  data:any;
  datos:any;
  loadingData=false;

  constructor(private pide:PideService, private logger:ComunicatorService) { }

  ngOnInit() {
  }
  // buscar(razon:string){
  //   this.pide.getData({razonSocial:razon},"buscarPJRazonSocial").then((res)=>{
  //     this.data= res.Header.personaJuridica.resultado;
  //       console.log(this.data);
  //   })
  // }

  buscar(rsocial:string){
    this.loadingData=true;
    this.pide.getDataUrlWithoutBody(rsocial,"razonsocial").then((res)=>{
      this.data= res.json()["soapenv:Envelope"]["soapenv:Header"]["ns2:personaJuridica"].resultado
      console.log(this.data.length);
      if(this.data.length){
        this.datos = this.data;
      }

      this.loadingData=false;

    },err=>{
      this.loadingData=false;
      this.logger.addLogMessage({tipo:"error",message:err});
    })

  }

}
