import { TestBed } from '@angular/core/testing';

import { MostrarRutinasService } from './mostrar-rutinas.service';

describe('MostrarRutinasService', () => {
  let service: MostrarRutinasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrarRutinasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
