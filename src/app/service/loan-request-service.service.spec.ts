import { TestBed } from '@angular/core/testing';

import { LoanRequestServiceService } from './loan-request-service.service';

describe('LoanRequestServiceService', () => {
  let service: LoanRequestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanRequestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
