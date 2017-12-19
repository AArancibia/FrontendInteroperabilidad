import { Injectable } from '@angular/core';
import {Client, SOAPService} from "ngx-soap";
import {Http} from "@angular/http";

@Injectable()
export class PideService {
  baseUrl =  'http://192.168.10.6:5050/platpide';





  constructor(private http: Http,private soap: SOAPService) { }

  getWsdl() {
    const url = 'https://ws3.pide.gob.pe/services/SunarpPideService?wsdl';
    return this.http.get(url)
      .toPromise()
      .then(response => response).catch(this.handleError);
  }


  getData(operationBody:any,nombreOperacion): Promise<any>{

    return new Promise((resolve,reject)=>{
      this.getWsdl().then(response =>{


        this.soap.createClient(response.text()).then((client: Client) => {


          return client.operation(nombreOperacion, operationBody)
            .then(operation => {
              if (operation.error) {
                console.log('Operation error', operation.error);
                return;
              }
              let url = operation.url.replace("http","https")+"?wsdl";

              return this.http.post(url,operation.xml, { headers: operation.headers }).toPromise().then(
                res => {
                  let jsonResponse = client.parseResponseBody(res.text());
                  resolve(jsonResponse);
                },
                err => {
                  console.log("Error calling ws", err);
                  reject(err);

                }
              );
            });

        })

      })
    });



  }


  getAeronave(matricula:string):Promise<any>{
    const url = this.baseUrl+'/aeronave/'+matricula;
    return this.http.post(url,{})
      .toPromise()
      .then(response => response).catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
