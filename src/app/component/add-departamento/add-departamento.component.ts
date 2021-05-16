import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../model/departamento';
import { DepartamentoService } from '../../service/departamento.service';

@Component({
  selector: 'app-add-departamento',
  templateUrl: './add-departamento.component.html',
  styleUrls: ['./add-departamento.component.css']
})
export class AddDepartamentoComponent implements OnInit {

  departamento: Departamento = new Departamento()
  submitted = false;

  constructor(private departamentoService: DepartamentoService) { }

  ngOnInit(): void {
  }

  save() {
    this.departamentoService.addDepartamento(this.departamento)
      .subscribe(data => console.log(data), error => console.log(error));
    this.departamento = new Departamento();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
