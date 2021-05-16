import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Departamento } from '../model/departamento';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private departamentoUrl = 'http://localhost:5000/api/v1/crud/departamento';

  constructor(private http: HttpClient) { }

  public addDepartamento(departamento: Departamento): Observable<Departamento> {
    return this.http.post<Departamento>(this.departamentoUrl,departamento);
  }
 
  public updateDepartamento(departamento: Departamento): Observable<Object> {
    return this.http.put(this.departamentoUrl, departamento);
  }
 
  public deleteDepartamento(departamento:Departamento): Observable<any> {
    return this.http.delete(`${this.departamentoUrl}/${departamento.id}`);
  }
 
  public getDepartamentos(): Observable<Departamento[]>{
    return this.http.get<Departamento[]>(this.departamentoUrl, httpOptions);
  }

  public getDepartamentoById(id: number): Observable<Departamento> {
    return this.http.get<Departamento>(`${this.departamentoUrl}/${id}`, httpOptions);
  }
}
