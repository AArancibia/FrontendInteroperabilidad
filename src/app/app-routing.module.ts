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


const routes: Routes = [
  {path: 'buscarNaveAeronave', component: BuscarNaveAeronaveComponent},
  {path: 'buscarPjrazonSocial', component: BuscarPJRazonSocialComponent},
  {path: 'buscarTitularidad', component: BuscarTituralidadComponent},
  {path: 'listarAsientos', component: ListarAsientosComponent},
  {path: 'obtenerOficinas', component: ObtenerOficinasComponent},
  {path: 'verAsiento', component: VerAsientoComponent},
  {path: 'verDetalleRpv', component: VerDetalleRpvComponent},
  {path: 'consultar', component: ConsultarDniComponent},
  {path: 'actualizarCredencial', component: ActualizarCredencialComponent},
  // {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '', redirectTo: '/buscarNaveAeronave', pathMatch: 'full'},
  {path: '**', redirectTo: '/buscarNaveAeronave', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
