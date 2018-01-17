import {Component, NgZone, OnInit} from '@angular/core';
import {Asiento} from "../../entities/asiento";
import {PideService} from "../../services/pide.service";
import {ComunicatorService} from "../../services/comunicator.service";

@Component({
  selector: 'app-listar-asientos',
  templateUrl: './listar-asientos.component.html',
  styleUrls: ['./listar-asientos.component.less']
})
export class ListarAsientosComponent implements OnInit {
asiento:Asiento;
datos:any;
dataOficina:any;
loadingData=false;
loadingDataSelect=false;
selectedFicha:any;
  constructor(private pide: PideService, private logger:ComunicatorService,private zone:NgZone) {
    this.asiento= new Asiento();
    this.datos=[];

  }

  ngOnInit() {
    this.obtenerOficinas();
  }
  buscarAsiento(){
    // this.pide.getData(this.asiento,"listarAsientos").then((res)=>{
    //  this.datos = res.Body.listarAsientosResponse.asientos;
    //   console.log(JSON.stringify(res),res);
    //   this.logger.addLogMessage({tipo:"success",message:"funciono"});
    // },(err)=>{
    //   this.logger.addLogMessage({tipo:"error",message:err});
    // })
      this.loadingData=true;
    this.pide.getDataUrlWithinBody(this.asiento,"asientos").then((res)=>{
      this.datos = res.json();
      console.log(this.datos);
      this.loadingData=false;
      this.logger.addLogMessage({tipo:"success",message:"funciono"});
    },(err)=>{
      this.logger.addLogMessage({tipo:"error",message:err});
      this.loadingData=false;
    })
  }

  obtenerOficinas(){
    this.loadingDataSelect=true;
    this.pide.getDataUrlWithoutBody("","oficinasreg")
      .then((res)=>{
        this.dataOficina=res.json()["soapenv:Envelope"]["soapenv:Header"]["ns2:oficina"].oficina;
        this.loadingDataSelect=false;
        console.log(this.loadingDataSelect);
      },err=>{
        this.logger.addLogMessage({tipo:"error",message:err});
        this.loadingDataSelect=false;
      })
  }

  selectOficina(valOficina:string){

    let dato = valOficina.split("_");
    this.asiento.oficina=dato[0];
    this.asiento.zona=dato[1];
    console.log(this.asiento.oficina);
  }

  nextImage(id:string){

    let elemento = $(".shape");
    console.log(elemento);
      this.zone.runOutsideAngular(()=>{
        elemento
          .shape('set next side',id )
          .shape('flip up');
      });

  }

  selectFicha(ficha:any){
    this.selectedFicha=ficha;

  }
}
