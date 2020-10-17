import { TestBed } from '@angular/core/testing';

import { DatacheckserviceService } from './datacheckservice.service';

describe('DatacheckserviceService', () => {
  let service: DatacheckserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatacheckserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
