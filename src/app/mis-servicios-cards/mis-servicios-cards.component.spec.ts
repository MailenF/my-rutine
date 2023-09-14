import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisServiciosCardsComponent } from './mis-servicios-cards.component';

describe('MisServiciosCardsComponent', () => {
  let component: MisServiciosCardsComponent;
  let fixture: ComponentFixture<MisServiciosCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisServiciosCardsComponent]
    });
    fixture = TestBed.createComponent(MisServiciosCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
