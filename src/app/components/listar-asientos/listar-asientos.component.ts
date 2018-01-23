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

  selectedFicha: any;
  selectedFolio: any;

  vistaAsiento: VistaAsiento;
  imageToShowFichas: any;
  imageToShowFolio: any;
  dataFichaAsiento: VistaAsiento;
  dataFolioAsiento: VistaAsiento;
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

  nextImage(pagina:string,paginaRef:string){
    this.dataFichaAsiento.pagina=pagina;
    this.dataFichaAsiento.nroPagRef=paginaRef;
    this.verAsiento(this.dataFichaAsiento,this.imageToShowFichas,this.isImageLoading);


    let elemento = $("#imgFichas.shape");
    console.log(elemento);
    console.log($('#'+this.selectedFicha.idImgFicha+'_'+pagina) );

    elemento
      .shape('set next side',$('#'+this.selectedFicha.idImgFicha+'_'+pagina))
      .shape('flip right');
      this.zone.runOutsideAngular(()=>{

      });

  }

  selectFicha(ficha:any){
    this.selectedFicha=ficha;
    this.dataFichaAsiento = new VistaAsiento();
    this.dataFichaAsiento.idImg = this.selectedFicha.idImgFicha;
    this.dataFichaAsiento.tipo = this.selectedFicha.tipo;
    // pagina.nroPagRef = this.selectedFicha.nroPagRef;
    // pagina.pagina = this.selectedFicha.pagina;
    this.dataFichaAsiento.nroTotalPag = this.datos.nroTotalPag;
    this.dataFichaAsiento.transaccion = this.datos.transaccion;



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
    this.verAsiento(this.dataFolioAsiento,this.imageToShowFolio,this.isFolioImageLoading);
  }



  createImageFromBlob(image: Blob,imageToShow) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
  verAsiento(vistaAsiento:VistaAsiento,imageToShow,imageLoading:boolean){
    imageLoading=true;
    // this.pide.getDataUrlWithinBody(this.vistaAsiento,'verasiento')
    this.pide.getImgAsiento(vistaAsiento)
      .then(res=>{

        // this.datos = res.json();
        this.createImageFromBlob(res,imageToShow);
        imageLoading = false;

      },err=>{

        imageLoading = false;
        this.logger.addLogMessage({tipo:"error",message:err});

      });
    // this.pide.getData(this.vistaAsiento,"verAsiento").then(res=>{
    //   this.datos = res.Body.verAsientoResponse;
    // }, err=>{
    //   this.logger.addLogMessage(err);
    // })
  }

  mostrarImagen(event){
    $('.ui.basic.modal')
      .modal('show')
    ;
    console.log(event.currentTarget);
    this.imgModal=event.currentTarget.src;
  }
}
