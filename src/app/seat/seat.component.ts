import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookingsService } from '../services/bookings.service';
import { booking, bus } from '../../dataType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss'],
})
export class SeatComponent implements OnInit {
  @Input() seat: any;
  @Input() busid: any;
  @Input() userid: any;
  @Input() Bus: any;
  @Output() bookingdata: EventEmitter<any> = new EventEmitter();
  @Output() deselectedSeat: EventEmitter<any> = new EventEmitter();

  bookingSeatData: any[] = [];
  booking: any[] = [];
  data: any;
  isSelected: boolean = false;
  seatno: any | undefined;

  constructor(private bookingService: BookingsService, private route: Router) {}
  ngOnInit(): void {
    console.log('bus::', this.Bus);

    this.bookingService.getBookings().subscribe((result) => {
      if (Array.isArray(result)) {
        result.forEach((element) => {
          if (this.Bus.id === element.busno && this.seat === element.seat) {
            this.booking.push(element.seat);

            this.isSelected = true;
          }
        });
        // Set isSelected to true only if the current Bus object's id is present in busNumbersSelected
      }
    });
  }

  getSeatnumber() {
    if (localStorage.getItem('admin') || localStorage.getItem('user')) {
      this.isSelected = true;

      this.data = {
        seat: this.seat,
        busno: this.busid,
        userid: JSON.parse(this.userid).id,
        fromdate: this.Bus.fromdate,
        Todate: this.Bus.todate,
        fromtime: this.Bus.fromtime,
        totime: this.Bus.totime,
      };
      this.bookingSeatData.push(this.data);
      console.log(this.data);
      this.bookingdata.emit(this.data);


    } else {

      this.route.navigate(['/user-login']);
      alert('Please signup/login to book seat!');

    }

    //   this.bookingService.addBookings(this.data).subscribe({next: data=>{
    //     console.log(data);
    //   },
    // error: error=>{
    //   console.log(error);
    // }
    // })
  }
  getSeatNumber(seatno: any) {
    this.bookingService.getBookings().subscribe((result) => {
      if (Array.isArray(result)) {
        result.forEach((element) => {
          if (this.Bus.id === element.busno && this.seat === element.seat) {
            this.isSelected = true;
          } else {
            this.isSelected = false;
            this.deselectedSeat.emit(seatno);
          }
        });
        // Set isSelected to true only if the current Bus object's id is present in busNumbersSelected
      }
    });
  }
}
