import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VehicleHomeComponent } from './components/vehicle-home/vehicle-home.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';

import { VehicleBackendService } from './services/vehicle-backend/vehicle-backend.service';
import { VehicleImagePipe } from './pipes/vehicle-image/vehicle-image.pipe';
import { VehicleColorPipe } from './pipes/vehicle-color/vehicle-color.pipe';
import { VehicleStatusPipe } from './pipes/vehicle-status/vehicle-status.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    VehicleHomeComponent, 
    VehicleListComponent, 
    AddVehicleComponent,
    VehicleImagePipe,
    VehicleColorPipe,
    VehicleStatusPipe
  ],
  exports: [
    VehicleHomeComponent,
    VehicleListComponent
  ],
  providers:[
    VehicleBackendService
  ]
})
export class VehiclesModule { }
