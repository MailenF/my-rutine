import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosPageComponent } from './objetivos-page.component';

describe('ObjetivosPageComponent', () => {
  let component: ObjetivosPageComponent;
  let fixture: ComponentFixture<ObjetivosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjetivosPageComponent]
    });
    fixture = TestBed.createComponent(ObjetivosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
