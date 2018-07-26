import { TestBed, inject } from '@angular/core/testing';

import { VehicleBackendService } from './vehicle-backend.service';

describe('VehicleBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleBackendService]
    });
  });

  it('should be created', inject([VehicleBackendService], (service: VehicleBackendService) => {
    expect(service).toBeTruthy();
  }));
});
