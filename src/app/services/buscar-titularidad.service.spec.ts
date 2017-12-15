import { TestBed, inject } from '@angular/core/testing';

import { BuscarTitularidadService } from './buscar-titularidad.service';

describe('BuscarTitularidadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuscarTitularidadService]
    });
  });

  it('should be created', inject([BuscarTitularidadService], (service: BuscarTitularidadService) => {
    expect(service).toBeTruthy();
  }));
});
