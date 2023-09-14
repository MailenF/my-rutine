import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciosFormSubRowComponent } from './ejercicios-form-sub-row.component';

describe('EjerciciosFormSubRowComponent', () => {
  let component: EjerciciosFormSubRowComponent;
  let fixture: ComponentFixture<EjerciciosFormSubRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjerciciosFormSubRowComponent]
    });
    fixture = TestBed.createComponent(EjerciciosFormSubRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
