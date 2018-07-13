import { TestBed, inject } from '@angular/core/testing';

import { DatabearerService } from './databearer.service';

describe('DatabearerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabearerService]
    });
  });

  it('should be created', inject([DatabearerService], (service: DatabearerService) => {
    expect(service).toBeTruthy();
  }));
});
