import { GetData} from '@credix/back-end';
import { Observable } from 'rxjs';
import { Empleado } from '../empleado.model';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class EmpleadoDataService {

constructor(private _getData:GetData ){}

getAllEmpleados(): Observable<Empleado[]> {
    return this._getData.getAllByParams({} , '/listEmpleados/');
  }  

  
getEditOrCreate( empleado: any ): Observable<Empleado[]> {
    return this._getData.getAllByParams(empleado.empleado , '/EditOrCreateEmpleado/');
  }    

getDelete( id: number ): Observable<Empleado[]> {

  console.log(id);
    return this._getData.getAllByParams(id , '/DeleteEmpleado/');
  }      

}