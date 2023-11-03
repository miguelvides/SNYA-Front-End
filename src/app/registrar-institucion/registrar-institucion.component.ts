import { Component, OnInit } from '@angular/core';
import { Institucion } from '../institucion';

@Component({
  selector: 'app-rgistrar-institucion',
  templateUrl: './registrar-institucion.component.html',
  styleUrls: ['./registrar-institucion.component.css']
})
export class RegistrarInstitucionComponent implements OnInit{
  institucion:Institucion = new Institucion();
  constructor(){

  }

ngOnInit(): void {

}
onSubmit(){
  console.log(this.institucion)
}

}

