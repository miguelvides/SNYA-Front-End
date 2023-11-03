import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Institucion } from './institucion';
@Injectable({
  providedIn: 'root'
})
export class institucionService {

  //Esta URL obtiene el listado de todos los empleados en el backend
  private baseURL = "http://localhost:8080/api/v1/institucion";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los empleados
  obtenerListaDeInstituciones():Observable<Institucion[]>{
    return this.httpClient.get<Institucion[]>(`${this.baseURL}`);
  }
}
