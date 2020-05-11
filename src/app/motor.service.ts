import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Motor } from './model/motor';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MotorService {
  private urlbase = "http://localhost:8080/api";
  private headers = new HttpHeaders(
                        { 'Content-Type' : 'application/json' });
  constructor(private http: HttpClient) { }

  obtenerListaMotores() : Observable<any>
  {
    console.log(this.urlbase + '/ListarMotores');
    return this.http.get(this.urlbase + '/ListarMotores').pipe(
      map(response => response as Motor[])
    )
  }

  registrarMotor(nuevomotor : Object)
  {
    console.log("estamos enviando los datos al rest");
    return this.http.post(this.urlbase + '/RegistrarMotor', nuevomotor, 
            { headers : this.headers });
  } 
}
