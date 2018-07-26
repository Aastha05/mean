import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeviceBackendService {

  constructor(
    private http: HttpClient
  ) { }

  fetchAllDevices(){
    return this.http.get<any>('http://localhost:3000/api/devices');
  }
}
