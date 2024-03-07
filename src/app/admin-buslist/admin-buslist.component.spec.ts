import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBuslistComponent } from './admin-buslist.component';

describe('AdminBuslistComponent', () => {
  let component: AdminBuslistComponent;
  let fixture: ComponentFixture<AdminBuslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBuslistComponent]
    });
    fixture = TestBed.createComponent(AdminBuslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
