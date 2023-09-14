import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarPageMobileComponent } from './dashboar-page-mobile.component';

describe('DashboarPageMobileComponent', () => {
  let component: DashboarPageMobileComponent;
  let fixture: ComponentFixture<DashboarPageMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboarPageMobileComponent]
    });
    fixture = TestBed.createComponent(DashboarPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
