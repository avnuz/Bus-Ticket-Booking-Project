import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateBusdetailsComponent } from './admin-update-busdetails.component';

describe('AdminUpdateBusdetailsComponent', () => {
  let component: AdminUpdateBusdetailsComponent;
  let fixture: ComponentFixture<AdminUpdateBusdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUpdateBusdetailsComponent]
    });
    fixture = TestBed.createComponent(AdminUpdateBusdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
