import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../../model/empleado';
import { EmpleadoService } from '../../service/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {

  empleados:Empleado[];

  constructor(private empleadoService: EmpleadoService, private router: Router) { }

  ngOnInit() {
    this.empleadoService.getEmpleados()
        .subscribe((data)=> {
          this.empleados = data;
          console.log(this.empleados)
        },
        err => {
          console.log(err);
        });
  }

  Modificar(empleado: Empleado):void{
    localStorage.setItem("id", empleado.id.toString());
    this.router.navigate(["updateempleado"]);
  }

  Eliminar(empleado: Empleado){
    this.empleadoService.deleteEmpleado(empleado)
    .subscribe((data) => {
      this.empleados = this.empleados.filter(e => e!==empleado);
      alert("Empleado eliminado ...")
    })
  }
}
