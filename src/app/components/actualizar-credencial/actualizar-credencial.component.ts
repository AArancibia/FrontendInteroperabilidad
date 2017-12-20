import { Component, OnInit } from '@angular/core';
import {UserCredencial} from "../../entities/user-credencial";

@Component({
  selector: 'app-actualizar-credencial',
  templateUrl: './actualizar-credencial.component.html',
  styleUrls: ['./actualizar-credencial.component.less']
})
export class ActualizarCredencialComponent implements OnInit {
 userCredencial:UserCredencial;
  constructor() {
    this.userCredencial = new UserCredencial;
  }

  ngOnInit() {
  }
  actualizar(){

  }

}
