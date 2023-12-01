import { Institucion } from './institucion';
import { ListaInstitucionesComponent } from './lista-instituciones/lista-instituciones.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarInstitucionComponent } from './registrar-institucion/registrar-institucion.component';
import { ActividadInstitucionComponent } from './actividad-institucion/actividad-institucion.component';
import { ListarDonanteComponent } from './listar-donante/listar-donante.component';
const routes: Routes = [
  {path : 'instituciones',component:ListaInstitucionesComponent},
  {path : '',redirectTo:'instituciones',pathMatch:'full'},
  {path : 'registrar-institucion',component:RegistrarInstitucionComponent}
  ,{path : 'actividad-institucion',component:ActividadInstitucionComponent}
  ,{path : 'listar-donante',component:ListarDonanteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
