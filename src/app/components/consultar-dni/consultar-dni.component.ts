import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../entities/usuario";

@Component({
  selector: 'app-consultar-dni',
  templateUrl: './consultar-dni.component.html',
  styleUrls: ['./consultar-dni.component.less']
})
export class ConsultarDniComponent implements OnInit {
usuario:Usuario;
  constructor() {
    this.usuario = new Usuario;
  }

  ngOnInit() {
  }

}
