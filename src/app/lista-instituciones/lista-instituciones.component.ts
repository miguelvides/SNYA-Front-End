import { Component, OnInit } from '@angular/core';
import { Institucion } from '../institucion';

@Component({
  selector: 'app-lista-instituciones',
  templateUrl: './lista-instituciones.component.html',
  styleUrls: ['./lista-instituciones.component.css']
})
export class ListaInstitucionesComponent implements OnInit {
  instituciones:Institucion[];

  constructor(){}

  ngOnInit(): void {
      this.instituciones = [{
        "id":1,
        "nombre":"FUSADES",
        "tipoInstitucion":"Publica",
        "fecha":"Diciembre 2023"
    },
    {
      "id":2,
      "nombre":"CALLEJAS",
      "tipoInstitucion":"PRIVADA",
      "fecha":"Enero 2023"
  }];
  }

}
