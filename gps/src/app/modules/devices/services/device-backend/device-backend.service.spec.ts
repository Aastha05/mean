import { TestBed, inject } from '@angular/core/testing';

import { DeviceBackendService } from './device-backend.service';

describe('DeviceBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceBackendService]
    });
  });

  it('should be created', inject([DeviceBackendService], (service: DeviceBackendService) => {
    expect(service).toBeTruthy();
  }));
});
