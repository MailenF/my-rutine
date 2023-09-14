import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosDialogComponent } from './objetivos-dialog.component';

describe('ObjetivosDialogComponent', () => {
  let component: ObjetivosDialogComponent;
  let fixture: ComponentFixture<ObjetivosDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjetivosDialogComponent]
    });
    fixture = TestBed.createComponent(ObjetivosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
