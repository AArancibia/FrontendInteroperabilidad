import { TestBed, inject } from '@angular/core/testing';

import { PideService } from './pide.service';

describe('PideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PideService]
    });
  });

  it('should be created', inject([PideService], (service: PideService) => {
    expect(service).toBeTruthy();
  }));
});
