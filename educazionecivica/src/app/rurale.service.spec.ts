import { TestBed } from '@angular/core/testing';

import { RuraleService } from './rurale.service';

describe('RuraleService', () => {
  let service: RuraleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuraleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
