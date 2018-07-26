import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }  from '@angular/common/http';

import { DeviceHomeComponent } from './components/device-home/device-home.component';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [DeviceHomeComponent, DeviceListComponent, AddDeviceComponent]
})
export class DevicesModule { }
