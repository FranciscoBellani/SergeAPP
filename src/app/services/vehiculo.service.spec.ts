import { TestBed } from '@angular/core/testing';

import { VehiculoService } from './vehiculo.service';

describe('VehiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('deberia haberse creado', () => {
    const service: VehiculoService = TestBed.get(VehiculoService);
    expect(service).toBeTruthy();
  });
});
