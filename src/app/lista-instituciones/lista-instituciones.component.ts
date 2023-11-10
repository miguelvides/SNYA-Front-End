import { Component, OnInit } from '@angular/core';
import { Institucion } from '../institucion';
import { InstitucionService } from '../institucion.service';

@Component({
  selector: 'app-lista-instituciones',
  templateUrl: './lista-instituciones.component.html',
  styleUrls: ['./lista-instituciones.component.css']
})
export class ListaInstitucionesComponent implements OnInit {
  instituciones:Institucion[];

  constructor(private institucionServicio : InstitucionService){}

  ngOnInit(): void {
    this.obtenerInstituciones();
      this.instituciones = [{
        "id":1,
        "nombre":"FUSADES",
        "tipoInstitucion":"PUBLICA",
        "fecha":"Diciembre 2023"
    },
    {
      "id":2,
      "nombre":"CALLEJAS",
      "tipoInstitucion":"PRIVADA",
      "fecha":"Enero 2023"
    },
    {
      "id":3,
      "nombre":"TELETON",
      "tipoInstitucion":"PUBLICA",
      "fecha":"Marzo 2023"
    }];
  }
  private obtenerInstituciones(){
    this.institucionServicio.obtenerListaDeInstituciones().subscribe(dato => {
      this.instituciones = dato;});
  
  }

}
