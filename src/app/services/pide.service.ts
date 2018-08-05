import { Injectable } from '@angular/core';
import {Client, SOAPService} from "ngx-soap";
import {Http, ResponseContentType} from "@angular/http";
import {PlatformLocation} from "@angular/common";

@Injectable()
export class PideService {
  // baseUrl =  '';
  baseUrl =  'http://167.250.206.164:5050/platpide/';
  // baseUrl =  'http://192.168.10.6:5050/platpide/';





  constructor(private http: Http,private soap: SOAPService, platformLocation:PlatformLocation) {
    console.log((platformLocation as any).location)
  }

  // getWsdl() {
  //   const url = 'https://ws3.pide.gob.pe/services/SunarpPideService?wsdl';
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(response => response).catch(this.handleError);
  // }


  // getData(operationBody:any,nombreOperacion): Promise<any>{
  //
  //   return new Promise((resolve,reject)=>{
  //     this.getWsdl().then(response =>{
  //
  //
  //       this.soap.createClient(response.text()).then((client: Client) => {
  //
  //
  //         return client.operation(nombreOperacion, operationBody)
  //           .then(operation => {
  //             if (operation.error) {
  //               console.log('Operation error', operation.error);
  //               return;
  //             }
  //             let url = operation.url.replace("http","https")+"?wsdl";
  //
  //             return this.http.post(url,operation.xml, { headers: operation.headers }).toPromise().then(
  //               res => {
  //                 let jsonResponse = client.parseResponseBody(res.text());
  //                 resolve(jsonResponse);
  //               },
  //               err => {
  //                 console.log("Error calling ws", err);
  //                 reject(err);
  //
  //               }
  //             );
  //           });
  //
  //       })
  //
  //     })
  //   });
  //
  //
  //
  // }


  // getAeronave(matricula:string):Promise<any>{
  //   const url = 'aeronave/'+matricula;
  //   return this.http.post(url,{})
  //     .toPromise()
  //     .then(response => response).catch(this.handleError);
  // }


  getDataUrlWithoutBody(id:string,name:string){
    const url = this.baseUrl+name+'/'+id;
    return this.http.post(url,{})
      .toPromise()
      .then(response => response).catch(this.handleError);
  }

  getDataUrlWithinBody(body:any,name:string){

    return this.http.post(this.baseUrl+name,body)
      .toPromise()
      .then(response => response).catch(this.handleError);
  }
  getImgAsiento(body:any){

    return this.http.post(this.baseUrl+"verasiento",body,{ responseType: ResponseContentType.Blob })
      .toPromise()
      .then((res) =>
        this.createImageFromBlob(res.blob()).then(resultado=>resultado),error=>error).catch(this.handleError);
  }
  createImageFromBlob(image: Blob):Promise<any>{
    let reader = new FileReader();
    return new Promise((resolve,reject)=>{
      reader.addEventListener("load", () => {
        resolve(reader.result) ;
      }, false);
      if (image) {
        reader.readAsDataURL(image);
      }
    });


  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}

//
// SOAP-ENV:Envelope
//   :
// {xmlns:SOAP-ENV: "http://schemas.xmlsoap.org/soap/envelope/",…}
// SOAP-ENV:Body
//   :
// {ns:Respuesta: {xmlns:ns: "http://www.pide.gob.pe",…}}
// ns:Respuesta
//   :
// {xmlns:ns: "http://www.pide.gob.pe",…}
// ns:Error
//   :
//   "Sunarp funciona de L-V (8am-10pm) si no esta devolviendo respuesta"
// ns:Opcion_1
//   :
//   "Intentelo en 2 minutos"
// ns:Opcion_2
//   :
//   "Ingrese un ticket en https://helpdesk.pide.gob.pe, indique hora y minuto"
// xmlns:ns
//   :
//   "http://www.pide.gob.pe"
// xmlns:SOAP-ENV
// :
// "http://schemas.xmlsoap.org/soap/envelope/"
// xmlns:web
//   :
//   "https://ws3.pide.gob.pe/services/SunarpPideService.SunarpPideServiceHttpSoap11Endpoint"
