import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaInstitucionesComponent } from './lista-instituciones/lista-instituciones.component';
import { AgregarActividadComponent } from './agregar-actividad/agregar-actividad.component';



const routes: Routes = [
  {path: 'instituciones', component: ListaInstitucionesComponent},
  {path: '', redirectTo: 'instituciones', pathMatch: 'full'},
  {path: 'agregar-actividad', component: AgregarActividadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
