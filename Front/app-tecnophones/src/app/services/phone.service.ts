import { HttpClient } from '@angular/common/http';
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

  guardarPhone(phone: Phone): Observable<any> {
    const url = this.baseURL + "phones";
    return this.http.post(url, phone);
  }

  obtenerPhone(id: string): Observable<any> {
    const url = this.baseURL + "phones/";
    return this.http.get(url + id);
  }

  editarPhone(id: string, phone: Phone): Observable<any> {
    const url = this.baseURL + "phones/";
    return this.http.put(url + id, phone);
  }
}
