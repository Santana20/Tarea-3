import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarMotorComponent } from './listar-motor/listar-motor.component';
import { RegistrarMotorComponent } from './registrar-motor/registrar-motor.component';


const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'ListaMotores', component: ListarMotorComponent },
  { path: 'RegistrarMotor', component: RegistrarMotorComponent }//,
  //{ path: '', component:  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
