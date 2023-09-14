import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinasPageComponent } from './rutinas-page.component';

describe('RutinasPageComponent', () => {
  let component: RutinasPageComponent;
  let fixture: ComponentFixture<RutinasPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutinasPageComponent]
    });
    fixture = TestBed.createComponent(RutinasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
