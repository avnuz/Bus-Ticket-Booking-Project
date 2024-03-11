import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { bus } from 'src/dataType';
import { SeatComponent } from '../seat/seat.component';
import { BookingsService } from '../services/bookings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  isCollapsed = false;
  busDetails: bus[] = [];
  userid: any | undefined;
  isSelected: boolean = true;
  booking: any[] = [];
  seatsSelected: any;
  seats: any[] | undefined;
  item: any;
  filteredData: bus[] =[];
  isSearch: boolean = false;
  constructor(
    private admin: AdminService,
    private bookingService: BookingsService,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.getBusDetails();
    this.isSearch= false;

    if (!localStorage.getItem('user')) {
      this.userid = localStorage.getItem('admin');
    } else {
      this.userid = localStorage.getItem('user');
    }
  }

  trackByFn(index: number, item: any): number {
    return item.id; // Use a unique identifier of each item as the track by value
  }

  generateSeatArray(seatcount: any, bus: any) {
    this.seats = new Array(seatcount).fill(0).map((_, index) => index + 1);
  }
  handleBookingData(data: any) {
    console.log(data);
    this.booking.push(data);
    this.seatsSelected = this.booking.length;
  }
  getDeselectedSeat(seatno: any) {
    const index = this.booking.findIndex((obj) => obj.seat === seatno);
    if (index !== -1) {
      this.booking.splice(index, 1);
    }
    this.seatsSelected = this.booking.length;
  }
  gotoPayment() {
    this.route.navigate(['/payment'], {
      state: {
        data: this.booking,
        seats: this.seatsSelected,
        seatDetails: this.booking,
      },
    });
  }
  getBusDetails() {
    this.admin.getBusDetails().subscribe((result) => {
      this.busDetails = result;
    });
  }
  onSubmit(data: any) {
    console.log(data);

    if (data.fromplace==='' && data.toplace==='' && data.date==='' ) {
      this.isSearch = false;
      this.getBusDetails();
    } else {
      console.log(data);
      this.isSearch = true;
      console.log('data', data);
      console.log('busdetails:::', this.busDetails);
      this.filteredData = this.busDetails.filter((item) => {
        console.log(item.from, item.to, item.fromdate);
        console.log(data.fromplace, data.toplace, data.date);
        console.log(item.from === data.name && item.fromdate === data.date);
        return item.pickup === data.name && item.fromdate === data.date;
      });
      console.log(this.filteredData);
    }

  }
}
