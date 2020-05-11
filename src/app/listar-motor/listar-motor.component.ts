import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Motor } from '../model/motor';
import { MotorService } from '../motor.service';

@Component({
  selector: 'app-listar-motor',
  templateUrl: './listar-motor.component.html',
  styleUrls: ['./listar-motor.component.css']
})
export class ListarMotorComponent implements OnInit {

  motores : Observable<Motor[]>

  constructor(private serviciomotor : MotorService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos()
  {
    console.log("llamando al servicio de ListarMotores");
    this.serviciomotor.obtenerListaMotores().subscribe(
      motores => this.motores = motores
    )
  }

}
