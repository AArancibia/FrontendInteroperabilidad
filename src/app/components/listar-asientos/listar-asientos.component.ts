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
  asiento: Asiento;
  datos: any;
  dataOficina: any;
  loadingData = false;
  loadingDataSelect = false;
  isImageLoading = true;
  isFolioImageLoading=true;
  isAsientoImageLoading=true;

  selectedFicha: any;
  selectedFolio: any;
  selectedAsiento:any;

  vistaAsiento: VistaAsiento;

  imageToShowFichas: any;
  imageToShowFolio: any;
  imageToShowAsientos: any;

  dataFichaAsiento: VistaAsiento;
  dataFolioAsiento: VistaAsiento;
  dataAsiento:VistaAsiento;
  imgModal:any;



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

  nextImage(pagina:string,paginaRef:string,id:string){
    let elemento = $("#"+id+".shape");
    let shape = "" ;

    if(id === 'imgFichas'){
      this.dataFichaAsiento.pagina=pagina;
      this.dataFichaAsiento.nroPagRef=paginaRef;
      this.verAsiento(this.dataFichaAsiento,"fichas");
      shape = this.selectedFicha.idImgFicha;
    }else if(id === 'imgAsientos'){
      this.dataAsiento.pagina=pagina;
      this.dataAsiento.nroPagRef=paginaRef;
      this.verAsiento(this.dataAsiento,"asientos");
      shape = this.selectedAsiento.idImgAsiento;
    }
        elemento
      .shape('set next side',$('#'+shape+'_'+pagina))
      .shape('flip right');
    console.log(shape,$('#'+shape+'_'+pagina));
      this.zone.runOutsideAngular(()=>{

      });

  }

  selectFicha(ficha:any){
    this.selectedFicha=ficha;
    this.dataFichaAsiento = new VistaAsiento();
    this.dataFichaAsiento.idImg = this.selectedFicha.idImgFicha;
    this.dataFichaAsiento.tipo = this.selectedFicha.tipo;
    this.dataFichaAsiento.nroTotalPag = this.datos.nroTotalPag;
    this.dataFichaAsiento.transaccion = this.datos.transaccion;
  }
  selectAsiento(ficha:any){
    this.selectedAsiento=ficha;
    this.dataAsiento = new VistaAsiento();
    this.dataAsiento.idImg = this.selectedAsiento.idImgAsiento;
    this.dataAsiento.tipo = this.selectedAsiento.tipo;
    this.dataAsiento.nroTotalPag = this.datos.nroTotalPag;
    this.dataAsiento.transaccion = this.datos.transaccion;
  }

  selectFolio(folio:any){
    this.selectedFolio=folio;
    this.dataFolioAsiento = new VistaAsiento();
    this.dataFolioAsiento.idImg = this.selectedFolio.idImgFolio;
    this.dataFolioAsiento.tipo = this.selectedFolio.tipo;
    this.dataFolioAsiento.nroPagRef = this.selectedFolio.nroPagRef;
    this.dataFolioAsiento.pagina = this.selectedFolio.pagina;
    this.dataFolioAsiento.nroTotalPag = this.datos.nroTotalPag;
    this.dataFolioAsiento.transaccion = this.datos.transaccion;
    this.verAsiento(this.dataFolioAsiento,"folios");
  }

  verAsiento(vistaAsiento:VistaAsiento,tipo:string) {
    // this.isFolioImageLoading = true;

    this.switchTipo(tipo,true);
      this.pide.getImgAsiento(vistaAsiento)
        .then(res => {
          // this.imageToShowFolio = res;
          // this.isFolioImageLoading = false;
          this.switchTipo(tipo,false,res);

          console.log(this.isFolioImageLoading);
        }, err => {
          // this.isFolioImageLoading = false;
          this.switchTipo(tipo,false);
          this.logger.addLogMessage({tipo: "error", message: err});
        });

  }

switchTipo(tipo:string,estado:boolean,img?:any){
    switch (tipo){
      case "folios":
        this.isFolioImageLoading=estado;
       if(img){
         this.imageToShowFolio=img;
       }
        break;
      case "fichas":
        this.isImageLoading=estado;
        if(img){
          this.imageToShowFichas=img;
        }
        break;
      case "asientos":
        this.isAsientoImageLoading=estado;
        if(img){
          this.imageToShowAsientos=img;
        }
        break;
    }
}


  mostrarImagen(event){
    $('.ui.basic.modal')
      .modal('show')
    ;
    console.log(event.currentTarget);
    this.imgModal=event.currentTarget.src;
  }
}
