import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosCardComponent } from './objetivos-card.component';

describe('ObjetivosCardComponent', () => {
  let component: ObjetivosCardComponent;
  let fixture: ComponentFixture<ObjetivosCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjetivosCardComponent]
    });
    fixture = TestBed.createComponent(ObjetivosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
