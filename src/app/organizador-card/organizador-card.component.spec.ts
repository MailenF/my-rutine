import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizadorCardComponent } from './organizador-card.component';

describe('OrganizadorCardComponent', () => {
  let component: OrganizadorCardComponent;
  let fixture: ComponentFixture<OrganizadorCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizadorCardComponent]
    });
    fixture = TestBed.createComponent(OrganizadorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
