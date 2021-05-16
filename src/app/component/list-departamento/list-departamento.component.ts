import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from '../../model/departamento';
import { DepartamentoService } from '../../service/departamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-departamento',
  templateUrl: './list-departamento.component.html',
  styleUrls: ['./list-departamento.component.css']
})
export class ListDepartamentoComponent implements OnInit {

  departamentos:Departamento[];

  constructor(private departamentoService: DepartamentoService, private router: Router) { }

  ngOnInit() {
    this.departamentoService.getDepartamentos()
        .subscribe((data)=> {
          this.departamentos = data;
          console.log(this.departamentos)
        },
        err => {
          console.log(err);
        });
  }

  Modificar(departamento: Departamento):void{
    localStorage.setItem("id", departamento.id.toString());
    this.router.navigate(["updatedepartamento"]);
  }

  Eliminar(departamento: Departamento){
    this.departamentoService.deleteDepartamento(departamento)
    .subscribe((data) => {
      this.departamentos = this.departamentos.filter(e => e!==departamento);
      alert("Departamento eliminado ...")
    })
  }

}
