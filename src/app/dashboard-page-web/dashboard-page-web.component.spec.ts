import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPageWebComponent } from './dashboard-page-web.component';

describe('DashboardPageWebComponent', () => {
  let component: DashboardPageWebComponent;
  let fixture: ComponentFixture<DashboardPageWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPageWebComponent]
    });
    fixture = TestBed.createComponent(DashboardPageWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
