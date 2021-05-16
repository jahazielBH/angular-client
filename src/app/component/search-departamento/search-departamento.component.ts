import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../model/departamento';
import { DepartamentoService } from '../../service/departamento.service';

@Component({
  selector: 'app-search-departamento',
  templateUrl: './search-departamento.component.html',
  styleUrls: ['./search-departamento.component.css']
})
export class SearchDepartamentoComponent implements OnInit {

  id: any;
  departamento: Departamento = new Departamento();

  constructor(private departamentoService: DepartamentoService) { }

  ngOnInit() {
    this.id = 0;
  }

  BuscarDepartamento() {
    this.departamentoService.getDepartamentoById(this.id)
      .subscribe((departamento: Departamento) => 
      (this.departamento = departamento, console.log(departamento))
    );
  }

  onSubmit() {
    this.BuscarDepartamento();
  }
}
