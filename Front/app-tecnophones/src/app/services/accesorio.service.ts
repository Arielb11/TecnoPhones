import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesorioService {
  readonly baseURL = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  getAcceosrios(): Observable<any>{
    const url = this.baseURL + "accesorios";
    return this.http.get(url);
  }

  eliminarAccesorio(id: string): Observable<any> {
    const url = this.baseURL + "accesorios/";
    return this.http.delete(url + id);
  }

  guardarAccesorio(nombre: string, precio: number, imagePath: File): Observable<any> {
    const url = this.baseURL + "accesorios";
    const fd = new FormData();
    fd.append('nombre', nombre);
    fd.append('precio', precio.toString());
    fd.append('imagePath', imagePath);
    return this.http.post(url, fd);
  }

  obtenerAccesorio(id: string): Observable<any> {
    const url = this.baseURL + "accesorios/";
    return this.http.get(url + id);
  }

  editarAccesorio(id: string, nombre: string, precio: number, imagePath: File): Observable<any> {
    const url = this.baseURL + "accesorios/";
    const fd = new FormData();
    fd.append('nombre', nombre);
    fd.append('precio', precio.toString());
    fd.append('imagePath', imagePath);
    return this.http.put(url + id, fd);
  }
}
