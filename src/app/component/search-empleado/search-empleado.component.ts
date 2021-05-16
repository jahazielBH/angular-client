import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../model/empleado';
import { EmpleadoService } from '../../service/empleado.service';

@Component({
  selector: 'app-search-empleado',
  templateUrl: './search-empleado.component.html',
  styleUrls: ['./search-empleado.component.css']
})
export class SearchEmpleadoComponent implements OnInit {

  id: any;
  empleado: Empleado = new Empleado();

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.id = 0;
  }

  BuscarEmpleado() {
    this.empleadoService.getEmpleadoById(this.id)
      .subscribe((empleado: Empleado) => 
      (this.empleado = empleado, console.log(empleado))
    );
  }

  onSubmit() {
    this.BuscarEmpleado();
  }
}
