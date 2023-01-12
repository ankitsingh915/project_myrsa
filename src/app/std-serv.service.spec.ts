import { TestBed } from '@angular/core/testing';

import { StdServService } from './std-serv.service';

describe('StdServService', () => {
  let service: StdServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StdServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
