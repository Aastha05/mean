import { Component, OnInit } from '@angular/core';
import { VehicleBackendService } from '../../services/vehicle-backend/vehicle-backend.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: any[] = [];

  constructor(
    private vehicleBackend: VehicleBackendService
  ) { }

  ngOnInit() {
    this
      .vehicleBackend
      .fetchAllVehicles()
      .subscribe(result => {
        console.log(result);
        this.vehicles = result;
      }, error => {
        console.warn(error);
      })
  }

}
