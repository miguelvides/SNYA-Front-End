import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaInstitucionesComponent } from './lista-instituciones/lista-instituciones.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarInstitucionComponent } from './registrar-institucion/registrar-institucion.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListaInstitucionesComponent,
    RegistrarInstitucionComponent
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