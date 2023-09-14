import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizadorPageWebComponent } from './organizador-page-web.component';

describe('OrganizadorPageWebComponent', () => {
  let component: OrganizadorPageWebComponent;
  let fixture: ComponentFixture<OrganizadorPageWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizadorPageWebComponent]
    });
    fixture = TestBed.createComponent(OrganizadorPageWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
