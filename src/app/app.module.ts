import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroActividadComponent } from './pages/registro-actividad/registro-actividad.component';
import { ConsultaActividadComponent } from './pages/consulta-actividad/consulta-actividad.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroActividadComponent,
    ConsultaActividadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
