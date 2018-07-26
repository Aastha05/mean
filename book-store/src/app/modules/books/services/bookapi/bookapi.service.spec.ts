import { TestBed, inject } from '@angular/core/testing';

import { BookapiService } from './bookapi.service';

describe('BookapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookapiService]
    });
  });

  it('should be created', inject([BookapiService], (service: BookapiService) => {
    expect(service).toBeTruthy();
  }));
});
