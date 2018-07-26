import { Component, OnInit } from '@angular/core';

import { DeviceBackendService } from '../../services/device-backend/device-backend.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  devices: any[] = [];

  constructor(
    private deviceBackend: DeviceBackendService
  ) { }

  ngOnInit() {
    this.deviceBackend
    .fetchAllDevices()
    .subscribe( result => {
      this.devices = result;
    }, error => {
      console.warn(error);
    })
  }

}
