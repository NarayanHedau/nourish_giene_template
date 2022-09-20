import { TestBed } from '@angular/core/testing';

import { ReistartionService } from './reistartion.service';

describe('ReistartionService', () => {
  let service: ReistartionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReistartionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
