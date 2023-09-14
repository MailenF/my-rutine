import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciosFormComponent } from './ejercicios-form.component';

describe('EjerciciosFormComponent', () => {
  let component: EjerciciosFormComponent;
  let fixture: ComponentFixture<EjerciciosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjerciciosFormComponent]
    });
    fixture = TestBed.createComponent(EjerciciosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
