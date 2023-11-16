import swal from 'sweetalert2';
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
    this.Instituciones=[{
      "identificador": "001",
      "nombre":"Prueba",
      "tipo_institucion": "hola",
      "fecha":"9/11/23"
    },
  ];
  }

  actualizarInstitucion(id:number){
    this.router.navigate(['actualizar-institucion',id]);
  }

  eliminarInstitucion(id:string){
    swal(
      {
        title: '¿Estás seguro?',
        text: "Confirma si deseas eliminar la institución",
        type: 'warning',
        showCancelButton:true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText:'Si, elimínala',
        cancelButtonText:'No, cancelar',
        confirmButtonClass:'btn btn-success',
        cancelButtonClass:'btn btn-danger',
        buttonsStyling:true
      }).then((result)=>
      {
        if(result.value)
        {
         this.institucionServicio.eliminarInstitucion(id).subscribe(dato=>
          {
            console.log(dato);
            this.obtenerInstitucion();
            swal
            (
              'Institución eliminada',
              'La institución ha sido eliminado con éxito',
              'success'
            )
          }) 
        }
      })
  }

  private obtenerInstitucion(){
    this.institucionServicio.obtenerListaDeInstituciones().subscribe(dato => {
      this.Instituciones = dato;
    });
  }


}
