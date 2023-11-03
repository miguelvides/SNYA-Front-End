import { Institucion } from './institucion';
import { ListaInstitucionesComponent } from './lista-instituciones/lista-instituciones.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarInstitucionComponent } from './registrar-institucion/registrar-institucion.component';
const routes: Routes = [
  {path : 'instituciones',component:ListaInstitucionesComponent},
  {path : '',redirectTo:'instituciones',pathMatch:'full'},
  {path : 'registrar-institucion',component:RegistrarInstitucionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
