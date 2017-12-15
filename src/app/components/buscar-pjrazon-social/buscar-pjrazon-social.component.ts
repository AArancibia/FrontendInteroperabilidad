import { Component, OnInit } from '@angular/core';
import {PideService} from "../../services/pide.service";

@Component({
  selector: 'app-buscar-pjrazon-social',
  templateUrl: './buscar-pjrazon-social.component.html',
  styleUrls: ['./buscar-pjrazon-social.component.less']
})
export class BuscarPJRazonSocialComponent implements OnInit {
  data:any;

  constructor(private pide:PideService) { }

  ngOnInit() {
  }
  buscar(razon:string){
    this.pide.getData({razonSocial:razon},"buscarPJRazonSocial").then((res)=>{
      this.data= res.Header.personaJuridica.resultado;
        console.log(this.data);
    })
  }
}
