import { TestBed } from '@angular/core/testing';

import { SpfService } from './spf.service';

describe('SpfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpfService = TestBed.get(SpfService);
    expect(service).toBeTruthy();
  });
});
