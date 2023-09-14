import { TestBed } from '@angular/core/testing';

import { RutinasFirebaseService } from './rutinas-firebase.service';

describe('RutinasFirebaseService', () => {
  let service: RutinasFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutinasFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
