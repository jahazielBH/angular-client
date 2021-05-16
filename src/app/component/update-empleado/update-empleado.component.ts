import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../model/empleado';
import { EmpleadoService } from '../../service/empleado.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-update-empleado',
  templateUrl: './update-empleado.component.html',
  styleUrls: ['./update-empleado.component.css']
})
export class UpdateEmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado();

  constructor(private empleadoService: EmpleadoService, private router: Router) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.empleadoService.getEmpleadoById(+id)
    .subscribe((data)=>{
      this.empleado = data;
      console.log(data);
    })
  }

  Actualizar(empleado: Empleado){
    this.empleadoService.updateEmpleado(empleado)
    .subscribe(data=>{
      console.log(data);
      alert("Empleado Actualizado ...");
      this.router.navigate(["listempleado"]);
    })
  }
  
}
