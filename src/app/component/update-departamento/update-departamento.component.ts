import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../model/departamento';
import { DepartamentoService } from '../../service/departamento.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-update-departamento',
  templateUrl: './update-departamento.component.html',
  styleUrls: ['./update-departamento.component.css']
})
export class UpdateDepartamentoComponent implements OnInit {

  departamento: Departamento = new Departamento();

  constructor(private departamentoService: DepartamentoService, private router: Router) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.departamentoService.getDepartamentoById(+id)
    .subscribe((data)=>{
      this.departamento = data;
      console.log(data);
    })
  }

  Actualizar(departamento: Departamento){
    this.departamentoService.updateDepartamento(departamento)
    .subscribe(data=>{
      console.log(data);
      alert("Departamento Actualizado ...");
      this.router.navigate(["listdepartamento"]);
    })
  }

}
