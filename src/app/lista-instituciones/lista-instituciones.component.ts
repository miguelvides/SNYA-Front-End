import { institucionService } from './../institucion.service';
import { Component, OnInit } from '@angular/core';
import { Institucion } from '../institucion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-instituciones',
  templateUrl: './lista-instituciones.component.html',
  styleUrls: ['./lista-instituciones.component.css']
})
export class ListaInstitucionesComponent implements OnInit {
  instituciones: Institucion[];

  constructor(private institucionServicio:institucionService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerInstitucion();
    this.instituciones = [{
      "identificador":"1",
      "nombre":"FUSADES",
      "tipo_institucion":"PUBLICA",
      "fecha":"Diciembre 2023"
    },
    {
      "identificador":"2",
      "nombre":"CALLEJAS",
      "tipo_institucion":"PRIVADA",
      "fecha":"Enero 2023"
    },
    {
      "identificador":"3",
      "nombre":"TELETON",
      "tipo_institucion":"PUBLICA",
      "fecha":"Marzo 2023"
    }]
  }

  actualizarInstitucion(id:number){
    this.router.navigate(['actualizar-institucion',id]);
  }

  private obtenerInstitucion(){
    this.institucionServicio.obtenerListaDeInstituciones().subscribe(dato => {
      this.instituciones = dato;
    });
  }


}
