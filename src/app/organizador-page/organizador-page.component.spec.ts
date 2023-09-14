import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizadorPageComponent } from './organizador-page.component';

describe('OrganizadorPageComponent', () => {
  let component: OrganizadorPageComponent;
  let fixture: ComponentFixture<OrganizadorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizadorPageComponent]
    });
    fixture = TestBed.createComponent(OrganizadorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
