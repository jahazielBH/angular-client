import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { EmpleadoService } from './service/empleado.service';
import { DepartamentoService } from './service/departamento.service';
import { AppRoutingModule } from './app-routing.module';
import { AddEmpleadoComponent } from './component/add-empleado/add-empleado.component';
import { ListEmpleadoComponent } from './component/list-empleado/list-empleado.component';
import { UpdateEmpleadoComponent } from './component/update-empleado/update-empleado.component';
import { SearchEmpleadoComponent } from './component/search-empleado/search-empleado.component';
import { AddDepartamentoComponent } from './component/add-departamento/add-departamento.component';
import { UpdateDepartamentoComponent } from './component/update-departamento/update-departamento.component';
import { ListDepartamentoComponent } from './component/list-departamento/list-departamento.component';
import { SearchDepartamentoComponent } from './component/search-departamento/search-departamento.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEmpleadoComponent,
    ListEmpleadoComponent,
    UpdateEmpleadoComponent,
    SearchEmpleadoComponent,
    AddDepartamentoComponent,
    UpdateDepartamentoComponent,
    ListDepartamentoComponent,
    SearchDepartamentoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmpleadoService, DepartamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
