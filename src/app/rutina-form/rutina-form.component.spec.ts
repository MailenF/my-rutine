import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaFormComponent } from './rutina-form.component';

describe('RutinaFormComponent', () => {
  let component: RutinaFormComponent;
  let fixture: ComponentFixture<RutinaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutinaFormComponent]
    });
    fixture = TestBed.createComponent(RutinaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
