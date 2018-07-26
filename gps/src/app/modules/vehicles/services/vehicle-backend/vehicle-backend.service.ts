import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleBackendService {

  constructor(
    private http: HttpClient
  ) { }

  fetchAllVehicles(){
    return this.http.get<any[]>('http://localhost:3000/api/vehicles');
  }
}
