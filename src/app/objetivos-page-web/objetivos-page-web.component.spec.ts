import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosPageWebComponent } from './objetivos-page-web.component';

describe('ObjetivosPageWebComponent', () => {
  let component: ObjetivosPageWebComponent;
  let fixture: ComponentFixture<ObjetivosPageWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjetivosPageWebComponent]
    });
    fixture = TestBed.createComponent(ObjetivosPageWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
