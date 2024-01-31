import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Phone } from '../models/phone';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  readonly baseURL = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  getPhones(): Observable<any>{
    const url = this.baseURL + "phones";
    return this.http.get(url);
  }

  eliminarPhone(id: string): Observable<any> {
    const url = this.baseURL + "phones/";
    return this.http.delete(url + id);
  }

  guardarPhone(modelo:string, estado:string, bateria:number, 
    capacidad:number, observaciones:string, valor:number, imagePath:File): Observable<any> {
    const url = this.baseURL + "phones";
    const fd = new FormData();
    fd.append('modelo', modelo);
    fd.append('estado', estado);
    fd.append('bateria', bateria.toString());
    fd.append('capacidad', capacidad.toString());
    fd.append('observaciones', observaciones);
    fd.append('valor', valor.toString());
    fd.append('imagePath', imagePath);
    return this.http.post(url, fd);
  }

  obtenerPhone(id: string): Observable<any> {
    const url = this.baseURL + "phones/";
    return this.http.get(url + id);
  }

  editarPhone(id: string, modelo:string, estado:string, bateria:number, 
    capacidad:number, observaciones:string, valor:number, imagePath:File): Observable<any> {
    const url = this.baseURL + "phones/";
    const fd = new FormData();
    fd.append('modelo', modelo);
    fd.append('estado', estado);
    fd.append('bateria', bateria.toString());
    fd.append('capacidad', capacidad.toString());
    fd.append('observaciones', observaciones);
    fd.append('valor', valor.toString());
    fd.append('imagePath', imagePath);
    return this.http.put(url + id, fd);
  }
}
