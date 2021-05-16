import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../model/empleado';
import { EmpleadoService } from '../../service/empleado.service';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado()
  submitted = false;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
  }

  save() {
    this.empleadoService.addEmpleado(this.empleado)
      .subscribe(data => console.log(data), error => console.log(error));
    this.empleado = new Empleado();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
