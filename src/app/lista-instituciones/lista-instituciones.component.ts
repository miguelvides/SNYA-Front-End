
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
  Instituciones:Institucion[];

  constructor(private institucionServicio:institucionService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerInstitucion();

  }

  actualizarInstitucion(id:number){
    this.router.navigate(['actualizar-institucion',id]);
  }

  eliminarInstitucion(id:String){
    this.institucionServicio.eliminarInstitucion(id).subscribe(dato =>{
      console.log(dato);
      this.obtenerInstitucion();
    })
  }

  private obtenerInstitucion(){
    this.institucionServicio.obtenerListaDeInstituciones().subscribe(dato => {
      this.Instituciones = dato;
    });
  }


}
