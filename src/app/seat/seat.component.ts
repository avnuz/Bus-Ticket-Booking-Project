import { Component, Input, OnInit } from '@angular/core';
import { BookingsService } from '../services/bookings.service';
import { booking } from '../../dataType';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  @Input() seat: any;
  @Input() busid: any;
  @Input() userid: any;
  @Input() Bus: any ;
  booking: any[] = [];
  data: any;
  isSelected: boolean =false;
  seatno: any | undefined;

  constructor(private bookingService: BookingsService){


  }
  ngOnInit(): void {

    this.bookingService.getBookings().subscribe((result) => {
  console.log("result::", result);
  console.log("bus::", this.Bus);
  if (Array.isArray(result)) {

    result.forEach(element => {
      console.log(element);
      if (this.Bus.id === element.busno && this.seat === element.seat) {
        console.log("yes");
        this.booking.push(element.seat);
        console.log("booking:::", this.booking);
        this.isSelected=true;

      }
    });
    // Set isSelected to true only if the current Bus object's id is present in busNumbersSelected

  }
});



  }

  getSeatnumber(){
    this.isSelected=true;
    console.log(this.seat);
    console.log(this.busid);
    console.log(JSON.parse(this.userid)[0].id);

    this.data= {seat: this.seat, busno: this.busid, userid: JSON.parse(this.userid)[0].id};
    this.bookingService.addBookings(this.data).subscribe({next: data=>{
      console.log(data);
    },
  error: error=>{
    console.log(error);
  }
  })

  }
  getSeatNumber(){
    this.isSelected=false;

  }

}
