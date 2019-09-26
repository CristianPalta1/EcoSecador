import { TestBed } from '@angular/core/testing';

import { AuthemticationService } from './authemtication.service';

describe('AuthemticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthemticationService = TestBed.get(AuthemticationService);
    expect(service).toBeTruthy();
  });
});
