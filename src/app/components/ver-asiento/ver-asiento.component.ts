import { Component, OnInit } from '@angular/core';
import {VistaAsiento} from "../../entities/vista-asiento";
import {PideService} from "../../services/pide.service";
import {ComunicatorService} from "../../services/comunicator.service";

@Component({
  selector: 'app-ver-asiento',
  templateUrl: './ver-asiento.component.html',
  styleUrls: ['./ver-asiento.component.less']
})
export class VerAsientoComponent implements OnInit {
vistaAsiento:VistaAsiento;
datos:any;
  loadingData=false;
  isImageLoading=true;
  imageToShow: any;
  constructor(private pide: PideService, private logger:ComunicatorService) {
    this.vistaAsiento = new VistaAsiento();

  }

  ngOnInit() {
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
  verAsiento(){
    this.loadingData=true;
    // this.pide.getDataUrlWithinBody(this.vistaAsiento,'verasiento')
    this.pide.getImgAsiento(this.vistaAsiento)
    .then(res=>{
      this.loadingData=false;
      // this.datos = res.json();
      this.createImageFromBlob(res);
      this.isImageLoading = false;
      console.log(this.imageToShow);
    },err=>{
      this.loadingData=false;
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
