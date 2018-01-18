import {Component, NgZone, OnInit} from '@angular/core';
import {Asiento} from "../../entities/asiento";
import {PideService} from "../../services/pide.service";
import {ComunicatorService} from "../../services/comunicator.service";
import {VistaAsiento} from "../../entities/vista-asiento";

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
  isImageLoading=true;
selectedFicha:any;
  vistaAsiento:VistaAsiento;
  imageToShow: any;
  constructor(private pide: PideService, private logger:ComunicatorService,private zone:NgZone) {
    this.vistaAsiento = new VistaAsiento();
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

  nextImage(pagina:string){

    let elemento = $("#imgFichas.shape");
    console.log(elemento);
    console.log($('#'+this.selectedFicha.idImgFicha+'_'+pagina) );

    elemento
      .shape('set next side',$('#'+this.selectedFicha.idImgFicha+'_'+pagina))
      .shape('flip up');
      this.zone.runOutsideAngular(()=>{

      });

  }

  selectFicha(ficha:any){
    this.selectedFicha=ficha;

  }



  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
  verAsiento(vistaAsiento:VistaAsiento){
    this.loadingData=true;
    // this.pide.getDataUrlWithinBody(this.vistaAsiento,'verasiento')
    this.pide.getImgAsiento(vistaAsiento)
      .then(res=>{

        // this.datos = res.json();
        this.createImageFromBlob(res);
        this.isImageLoading = false;

      },err=>{

        this.isImageLoading = false;
        this.logger.addLogMessage({tipo:"error",message:err});

      });
    // this.pide.getData(this.vistaAsiento,"verAsiento").then(res=>{
    //   this.datos = res.Body.verAsientoResponse;
    // }, err=>{
    //   this.logger.addLogMessage(err);
    // })
  }
}
