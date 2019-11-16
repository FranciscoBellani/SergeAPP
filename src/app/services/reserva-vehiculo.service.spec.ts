import { TestBed } from '@angular/core/testing';

import { ReservaVehiculoService } from './reserva-vehiculo.service';

describe('ReservaVehiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReservaVehiculoService = TestBed.get(ReservaVehiculoService);
    expect(service).toBeTruthy();
  });
});
