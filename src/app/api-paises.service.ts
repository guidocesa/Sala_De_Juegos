import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiPaisesService {

  constructor(private http: HttpClient) { }


  public obtenerListadoParametro(url: string){
    return this.http.get(url);
  }
}
