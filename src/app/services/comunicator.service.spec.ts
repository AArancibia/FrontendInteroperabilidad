import { TestBed, inject } from '@angular/core/testing';

import { ComunicatorService } from './comunicator.service';

describe('ComunicatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComunicatorService]
    });
  });

  it('should be created', inject([ComunicatorService], (service: ComunicatorService) => {
    expect(service).toBeTruthy();
  }));
});
