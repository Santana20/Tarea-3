import { Component, OnInit } from '@angular/core';
import { MotorService } from '../motor.service';
import { Motor } from '../model/motor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-motor',
  templateUrl: './registrar-motor.component.html',
  styleUrls: ['./registrar-motor.component.css']
})
export class RegistrarMotorComponent implements OnInit {

  motor : Motor = new Motor();
  constructor(private serviciomotor : MotorService,
              private router : Router) { }

  ngOnInit(): void {
  }


  registrarMotor()
  {
    this.serviciomotor.registrarMotor(this.motor).subscribe(
      data => this.router.navigate(['ListaMotores'])
    );
  }
}
