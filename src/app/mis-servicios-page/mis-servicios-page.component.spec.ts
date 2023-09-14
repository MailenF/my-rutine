import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisServiciosPageComponent } from './mis-servicios-page.component';

describe('MisServiciosPageComponent', () => {
  let component: MisServiciosPageComponent;
  let fixture: ComponentFixture<MisServiciosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisServiciosPageComponent]
    });
    fixture = TestBed.createComponent(MisServiciosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
