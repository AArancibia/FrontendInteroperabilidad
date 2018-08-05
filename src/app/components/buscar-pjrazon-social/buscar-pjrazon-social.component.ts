import { Component, OnInit } from '@angular/core';
import {PideService} from "../../services/pide.service";
import {ComunicatorService} from "../../services/comunicator.service";
import {stringify} from "@angular/core/src/util";

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
      if(res.json()["soapenv:Envelope"]&&res.json()["soapenv:Envelope"]["soapenv:Header"]){
        this.data= res.json()["soapenv:Envelope"]["soapenv:Header"]["ns2:personaJuridica"].resultado
        console.log(res.json());
        if(this.data&&this.data.length){
          this.datos = this.data;
        }
      }else{
        let msj = "";
        if(res.json()["SOAP-ENV:Envelope"]){
          msj = res.json()["SOAP-ENV:Envelope"]["SOAP-ENV:Body"]["ns:Respuesta"]["ns:Error"]
        }else if(res.json()["soapenv:Envelope"]){
          msj = res.json()["soapenv:Envelope"]["soapenv:Body"]["ns:Respuesta"]["ns:Error"]
        }
        this.logger.addLogMessage({
          tipo:"warning",
          message:msj

        })
      }

      this.loadingData=false;

    },err=>{
      this.loadingData=false;
      this.logger.addLogMessage({tipo:"error",message:err});
    }).catch(this.handleError)

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
