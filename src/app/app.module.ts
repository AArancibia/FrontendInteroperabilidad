import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuscarNaveAeronaveComponent } from './components/buscar-nave-aeronave/buscar-nave-aeronave.component';
import {AppRoutingModule} from "./app-routing.module";
import { BuscarPJRazonSocialComponent } from './components/buscar-pjrazon-social/buscar-pjrazon-social.component';
import { BuscarTituralidadComponent } from './components/buscar-tituralidad/buscar-tituralidad.component';
import { ObtenerOficinasComponent } from './components/obtener-oficinas/obtener-oficinas.component';
import { ListarAsientosComponent } from './components/listar-asientos/listar-asientos.component';
import { VerAsientoComponent } from './components/ver-asiento/ver-asiento.component';
import { VerDetalleRpvComponent } from './components/ver-detalle-rpv/ver-detalle-rpv.component';
import {NgxSoapModule} from "ngx-soap";
import {BuscarNaveAeronaveService} from "./services/buscar-nave-aeronave.service";
import { KeysPipe } from './pipes/keys.pipe';
import {FormsModule} from "@angular/forms";
import {BuscarTitularidadService} from "./services/buscar-titularidad.service";
import { DropdownDirective } from './directives/dropdown.directive';
import {PideService} from "./services/pide.service";


@NgModule({
  declarations: [
    AppComponent,
    BuscarNaveAeronaveComponent,
    BuscarPJRazonSocialComponent,
    BuscarTituralidadComponent,
    ObtenerOficinasComponent,
    ListarAsientosComponent,
    VerAsientoComponent,
    VerDetalleRpvComponent,
    KeysPipe,
    DropdownDirective
  ],
  imports: [
    FormsModule,
    NgxSoapModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PideService,
    BuscarTitularidadService,
    BuscarNaveAeronaveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
