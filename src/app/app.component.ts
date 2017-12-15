import { Component } from '@angular/core';
import {BuscarNaveAeronaveService} from "./services/buscar-nave-aeronave.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';

  constructor(private buscarNave: BuscarNaveAeronaveService){

  }
}
