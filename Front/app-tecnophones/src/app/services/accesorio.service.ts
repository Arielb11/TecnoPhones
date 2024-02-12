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

  guardarAccesorio(nombre: string, precio: number, imagenPrincipal: File, imagePaths: File[]): Observable<any> {
    const url = this.baseURL + "accesorios";
    const fd = new FormData();
    fd.append('nombre', nombre);
    fd.append('precio', precio.toString());
    fd.append('imagenPrincipal', imagenPrincipal);
    imagePaths.forEach((archivo) => {
        // Usa el mismo nombre de campo para todos los archivos, conforme a la configuración de Multer
        fd.append('imagePaths', archivo, archivo.name);
    });
    return this.http.post(url, fd);
  }



  obtenerAccesorio(id: string): Observable<any> {
    const url = this.baseURL + "accesorios/";
    return this.http.get(url + id);
  }

  editarAccesorio(id: string, nombre: string, precio: number,imagenPrincipal: File, imagePaths: File[]): Observable<any> {
    const url = this.baseURL + "accesorios/";
    const fd = new FormData();
    fd.append('nombre', nombre);
    fd.append('precio', precio.toString());
    fd.append('imagenPrincipal', imagenPrincipal);
    imagePaths.forEach((imagen, index) => {
      fd.append(`imagePaths`, imagen, imagen.name);
    });
    return this.http.put(url + id, fd);
  }
}
