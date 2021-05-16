import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empleado } from '../model/empleado';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private empleadoUrl = 'http://localhost:5000/api/v1/crud/empleado';

  constructor(private http: HttpClient) { }

  public addEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.empleadoUrl, empleado, httpOptions);
  }
 
  public updateEmpleado(empleado: Empleado): Observable<Object> {
    return this.http.put(this.empleadoUrl, empleado, httpOptions);
  }
 
  public deleteEmpleado(empleado: Empleado): Observable<any> {
    return this.http.delete(`${this.empleadoUrl}/${empleado.id}`, httpOptions);
  }
 
  public getEmpleados(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.empleadoUrl, httpOptions);
  }

  public getEmpleadoById(id: number): Observable<Empleado> {
    return this.http.get<Empleado>(`${this.empleadoUrl}/${id}`, httpOptions);
  }
}
