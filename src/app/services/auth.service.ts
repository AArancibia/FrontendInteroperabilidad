import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {Http, Headers, RequestOptions} from "@angular/http";

@Injectable()
export class AuthService {
  baseUrl =  'http://localhost:8000/mockbin/oauth2/token';

  constructor(private http: Http) { }

  public isAuthenticated(): boolean {
    // const helper = new JwtHelperService();
    console.log(localStorage.getItem('token'))

    const token = JSON.parse(localStorage.getItem('token'));


    if(!token||token === "undefined"||token === null){

      return false;
    }


    const ahora = new Date();
    console.log(token.fi);
    const fi = new Date(token.fi);
    fi.setSeconds(fi.getSeconds()+token.expires_in);
    if(ahora.getTime()>fi.getTime()){
      return false;
    }
    return true;
  }

  getToken(code:string){
    let headers = new Headers({"Content-Type":"application/json","x-forwarded-proto":"https"});

    // const options = new RequestOptions({para});
    // options.headers.append("Content-Type","application/json");
    // options.headers.append("x-forwarded-proto","https");
    const data = {
      grant_type:"authorization_code",
      client_id: "HR3r64MXyCjRuAGXNuKNUcHkBTj9hQyh",
      client_secret: "Zktqdsf2ak5htK1EPBmKgBLsU9p1MKQz",
      scope: "read",
      provision_key: "gGjiykLSCGGDWTPL6LodqYNEXk4egqiN",
      code: code
    }
    const url = this.baseUrl;
    return this.http.post(url,data,{headers: headers})
      .toPromise()
      .then(response => response.json()).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
