import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusTicketPaymentComponent } from './bus-ticket-payment.component';

describe('BusTicketPaymentComponent', () => {
  let component: BusTicketPaymentComponent;
  let fixture: ComponentFixture<BusTicketPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusTicketPaymentComponent]
    });
    fixture = TestBed.createComponent(BusTicketPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
