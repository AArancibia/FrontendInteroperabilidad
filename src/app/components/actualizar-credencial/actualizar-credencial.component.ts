import { Component, OnInit } from '@angular/core';
import {UserCredencial} from "../../entities/user-credencial";
import {PideService} from "../../services/pide.service";
import {ComunicatorService} from "../../services/comunicator.service";
import {animate, state, style, transition, trigger} from '@angular/animations'

@Component({
  selector: 'app-actualizar-credencial',
  templateUrl: './actualizar-credencial.component.html',
  styleUrls: ['./actualizar-credencial.component.less'],
  animations:[
    trigger(
      'heroState',
      [
        state(
          'inactive',
          style({
            backgroundColor:'#eee',
            transform:'scale(1)'
          })
        ),
        state(
          'active',
          style({
            backgroundColor:'#cfd8dc',
            transform: 'scale(1.1)'
          })
        ),
        transition(
          'inactive => active',
          animate('100ms ease-in')
        ),
        transition(
          'active => inactive',
          animate('100ms ease-out')
        )
    ]),
    trigger(
      'shrinkOut',
      [
       state(
         'in',
         style({height: '*',backgroundColor:'#cfd8dc'})),
         transition(
           '* => void',
           [
             style({height: '*',backgroundColor:'#cfd8dc'}),
              animate(
                250,
                style({height: 0})
              )
      ])
    ]),
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({height: 0}),
        animate(250)
      ]),
      transition('* => void', [
        animate(250, style({height: 0}))
      ])
    ])
  ]
})
export class ActualizarCredencialComponent implements OnInit {
 userCredencial:UserCredencial;
 datos:any;
 state = 'inactive';
 currentindex = 0;

  constructor(private pide:PideService, private logger: ComunicatorService) {
    this.userCredencial = new UserCredencial;
  }

  ngOnInit() {
  }


  actualizar(){
    this.pide.getDataUrlWithinBody(this.userCredencial,'buscardni').then(res=>{
      this.datos = res.json();
      console.log(this.datos);
    },err=>{
      this.logger.addLogMessage({tipo:"error",message:err});
    });
  }

  toggleState(){
    this.state=this.state === 'active' ? 'inactive' : 'active';
  }

  mostrardetalle(index){
    console.log("si le d oy");
    if(this.currentindex === index){
      this.currentindex=0;
    }else{
      this.currentindex=index;
    }

  }


}
