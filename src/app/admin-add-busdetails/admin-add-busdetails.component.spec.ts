import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddBusdetailsComponent } from './admin-add-busdetails.component';

describe('AdminAddBusdetailsComponent', () => {
  let component: AdminAddBusdetailsComponent;
  let fixture: ComponentFixture<AdminAddBusdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddBusdetailsComponent]
    });
    fixture = TestBed.createComponent(AdminAddBusdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
