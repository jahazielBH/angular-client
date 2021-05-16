import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Empleados
import { AddEmpleadoComponent } from './component/add-empleado/add-empleado.component';
import { ListEmpleadoComponent } from './component/list-empleado/list-empleado.component';
import { UpdateEmpleadoComponent } from './component/update-empleado/update-empleado.component';
import { SearchEmpleadoComponent } from './component/search-empleado/search-empleado.component';
//Departamentos
import { AddDepartamentoComponent } from './component/add-departamento/add-departamento.component';
import { ListDepartamentoComponent } from './component/list-departamento/list-departamento.component';
import { UpdateDepartamentoComponent } from './component/update-departamento/update-departamento.component';
import { SearchDepartamentoComponent } from './component/search-departamento/search-departamento.component';

const routes: Routes = [
  { path: 'addempleado', component: AddEmpleadoComponent },
  { path: 'listempleado', component: ListEmpleadoComponent },
  { path: 'updateempleado', component: UpdateEmpleadoComponent },
  { path: 'searchempleado', component: SearchEmpleadoComponent },
  { path: 'adddepartamento', component: AddDepartamentoComponent },
  { path: 'listdepartamento', component: ListDepartamentoComponent },
  { path: 'updatedepartamento', component: UpdateDepartamentoComponent },
  { path: 'searchdepartamento', component: SearchDepartamentoComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
