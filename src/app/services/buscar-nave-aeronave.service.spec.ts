import { TestBed, inject } from '@angular/core/testing';

import { BuscarNaveAeronaveService } from './buscar-nave-aeronave.service';

describe('BuscarNaveAeronaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuscarNaveAeronaveService]
    });
  });

  it('should be created', inject([BuscarNaveAeronaveService], (service: BuscarNaveAeronaveService) => {
    expect(service).toBeTruthy();
  }));
});
