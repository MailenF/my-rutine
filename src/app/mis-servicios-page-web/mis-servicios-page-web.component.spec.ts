import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisServiciosPageWebComponent } from './mis-servicios-page-web.component';

describe('MisServiciosPageWebComponent', () => {
  let component: MisServiciosPageWebComponent;
  let fixture: ComponentFixture<MisServiciosPageWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisServiciosPageWebComponent]
    });
    fixture = TestBed.createComponent(MisServiciosPageWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
