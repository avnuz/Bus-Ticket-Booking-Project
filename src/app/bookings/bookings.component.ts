import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../services/bookings.service';
import { booking, bus } from 'src/dataType';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {
  bookings: booking[] = [];
  busDetails: any[] = [];
  passengerDetails: any[] = [];

  constructor(
    private bookingService: BookingsService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.getBookingsByUserid();
  }

  getBookingsByUserid(): void {
    if (JSON.parse(localStorage.getItem('admin') as string) != null){
      var userId = JSON.parse(localStorage.getItem('admin') as string);
    }
    else{
      var userId = JSON.parse(localStorage.getItem('user') as string);
    }
    console.log(userId.id)


    if (userId ) {
      // Check if userId and its property 'id' exist
      this.bookingService.getBookings().subscribe((result) => {
        console.log(result);

        // Filter bookings based on userId
        this.bookings = result.filter((element) => {
          return element.userid === (userId.id as string);
        });

        console.log(this.bookings);

        // Retrieve bus details for each booking
        this.bookings.forEach((booking) => {
          this.adminService.getBusDetails().subscribe((busDetails) => {
            const foundBus = busDetails.find((bus) => bus.id === booking.busno);
            console.log(foundBus);
            if (foundBus) {
              // Check if busDetails already contains the foundBus
              if (!this.busDetails.some((bus) => bus.id === foundBus.id)) {
                this.busDetails.push(foundBus);
              }
            }
          });
        });
      });
    } else {
      console.error('User ID not found or invalid format');
    }
  }

  getPassengerDetails(id: any) {
    this.passengerDetails = this.bookings.filter((element) => {
      return element.busno === id;
    });
  }
}
