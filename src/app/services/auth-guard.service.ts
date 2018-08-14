import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Params, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";


@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const parametros: Params = route.queryParams;
    // console.log("hola ",parametros);
    if(this.authService.isAuthenticated()){
      return true;
    }
    if(parametros&&parametros.code){
      this.authService.getToken(parametros.code).then(res =>{
        const fi = new Date();
        localStorage.setItem("token",JSON.stringify({...res,fi}));
        // console.log(res.json())
        // localStorage.setItem("token",res.access_token);
        return true;
      },error =>{
        console.log("hay un error: ",error)
        window.location.href = "http://localhost:8080/loggin";
        return false;
      }).catch(this.handleError);
    }

    return false;

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}