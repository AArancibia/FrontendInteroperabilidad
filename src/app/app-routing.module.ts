/**
 * Created by darck on 19/06/2017.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BuscarNaveAeronaveComponent} from "./components/buscar-nave-aeronave/buscar-nave-aeronave.component";
import {BuscarPJRazonSocialComponent} from "./components/buscar-pjrazon-social/buscar-pjrazon-social.component";
import {BuscarTituralidadComponent} from "./components/buscar-tituralidad/buscar-tituralidad.component";
import {ListarAsientosComponent} from "./components/listar-asientos/listar-asientos.component";
import {ObtenerOficinasComponent} from "./components/obtener-oficinas/obtener-oficinas.component";
import {VerAsientoComponent} from "./components/ver-asiento/ver-asiento.component";
import {VerDetalleRpvComponent} from "./components/ver-detalle-rpv/ver-detalle-rpv.component";
import {ConsultarDniComponent} from "./components/consultar-dni/consultar-dni.component";
import {ActualizarCredencialComponent} from "./components/actualizar-credencial/actualizar-credencial.component";
import {AuthGuardService} from "./services/auth-guard.service";


const routes: Routes = [
  {path: 'buscarNaveAeronave', component: BuscarNaveAeronaveComponent, canActivate:[AuthGuardService]},
  {path: 'buscarPjrazonSocial', component: BuscarPJRazonSocialComponent, canActivate:[AuthGuardService]},
  {path: 'buscarTitularidad', component: BuscarTituralidadComponent, canActivate:[AuthGuardService]},
  {path: 'listarAsientos', component: ListarAsientosComponent, canActivate:[AuthGuardService]},
  {path: 'obtenerOficinas', component: ObtenerOficinasComponent, canActivate:[AuthGuardService]},
  {path: 'verAsiento', component: VerAsientoComponent, canActivate:[AuthGuardService]},
  {path: 'verDetalleRpv', component: VerDetalleRpvComponent, canActivate:[AuthGuardService]},
  {path: 'consultar', component: ConsultarDniComponent, canActivate:[AuthGuardService]},
  {path: 'actualizarCredencial', component: ActualizarCredencialComponent, canActivate:[AuthGuardService]},
  // {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '', redirectTo: 'buscarNaveAeronave', pathMatch: 'full'},
  {path: '**', redirectTo: 'buscarNaveAeronave', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
