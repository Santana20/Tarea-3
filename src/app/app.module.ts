import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarMotorComponent } from './registrar-motor/registrar-motor.component';
import { ListarMotorComponent } from './listar-motor/listar-motor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    RegistrarMotorComponent,
    ListarMotorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
