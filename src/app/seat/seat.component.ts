import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookingsService } from '../services/bookings.service';
import { booking, bus } from '../../dataType';

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
  @Output() bookingdata: EventEmitter<any> = new EventEmitter();
  @Output() deselectedSeat: EventEmitter<any> = new EventEmitter();

 bookingSeatData : any[] = [];
  booking: any[] = [];
  data: any;
  isSelected: boolean =false;
  seatno: any | undefined;

  constructor(private bookingService: BookingsService){


  }
  ngOnInit(): void {
    console.log("bus::", this.Bus);

    this.bookingService.getBookings().subscribe((result) => {

  if (Array.isArray(result)) {

    result.forEach(element => {

      if (this.Bus.id === element.busno && this.seat === element.seat) {

        this.booking.push(element.seat);

        this.isSelected=true;

      }
    });
    // Set isSelected to true only if the current Bus object's id is present in busNumbersSelected

  }
});



  }

  getSeatnumber(){
    this.isSelected=true;

console.log(this.Bus)
    this.data= {seat: this.seat, busno: this.busid, userid: JSON.parse(this.userid).id, fromdate: this.Bus.fromdate, Todate: this.Bus.todate, fromtime: this.Bus.fromtime, totime: this.Bus.totime};
    this.bookingSeatData.push(this.data);
    console.log(this.data)
    this.bookingdata.emit(this.data);
  //   this.bookingService.addBookings(this.data).subscribe({next: data=>{
  //     console.log(data);
  //   },
  // error: error=>{
  //   console.log(error);
  // }
  // })

  }
  getSeatNumber(seatno: any){
    this.bookingService.getBookings().subscribe((result) => {
      if (Array.isArray(result)) {
        result.forEach((element) => {
          if (this.Bus.id === element.busno && this.seat === element.seat) {


            this.isSelected = true;

          }
          else{
               this.isSelected = false;
                this.deselectedSeat.emit(seatno);
          }
        });
        // Set isSelected to true only if the current Bus object's id is present in busNumbersSelected
      }
    });






  }

}
