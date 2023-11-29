import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaInstitucionesComponent } from './lista-instituciones/lista-instituciones.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarInstitucionComponent } from './registrar-institucion/registrar-institucion.component';
import { FormsModule } from '@angular/forms';
import { ListarDonantesComponent } from './listar-donantes/listar-donantes.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaInstitucionesComponent,
    RegistrarInstitucionComponent,
    ListarDonantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
