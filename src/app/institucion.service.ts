import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Institucion } from './institucion';

@Injectable({
  providedIn: 'root'
})
export class InstitucionService {

  
  private baseURL = "http://localhost:4200";

  constructor(private httpClient : HttpClient){ }

  obtenerListaDeInstituciones():Observable<Institucion[]>{
  return this.httpClient.get<Institucion[]>(`${this.baseURL}`);
}
}
