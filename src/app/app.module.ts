import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaInstitucionesComponent } from './lista-instituciones/lista-instituciones.component';
import { ActualizarInstitucionComponent } from './actualizar-institucion/actualizar-institucion.component';
import {HttpClientModule} from '@angular/common/http';
import { AgregarActividadComponent } from './agregar-actividad/agregar-actividad.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaInstitucionesComponent,
    ActualizarInstitucionComponent,
    AgregarActividadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
