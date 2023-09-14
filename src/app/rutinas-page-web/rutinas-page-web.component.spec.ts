import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinasPageWebComponent } from './rutinas-page-web.component';

describe('RutinasPageWebComponent', () => {
  let component: RutinasPageWebComponent;
  let fixture: ComponentFixture<RutinasPageWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutinasPageWebComponent]
    });
    fixture = TestBed.createComponent(RutinasPageWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
