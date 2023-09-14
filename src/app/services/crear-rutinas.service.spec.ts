import { TestBed } from '@angular/core/testing';

import { CrearRutinasService } from './crear-rutinas.service';

describe('CrearRutinasService', () => {
  let service: CrearRutinasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearRutinasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
