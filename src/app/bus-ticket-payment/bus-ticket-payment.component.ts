import { Component, OnInit } from '@angular/core';
import { bus, PassengerDetails } from 'src/dataType';
import { AdminService } from '../services/admin.service';
import { BookingsService } from '../services/bookings.service';
import { booking } from '../../dataType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-ticket-payment',
  templateUrl: './bus-ticket-payment.component.html',
  styleUrls: ['./bus-ticket-payment.component.scss'],
})
export class BusTicketPaymentComponent implements OnInit {
  receivedBookingData: any[] | undefined;
  busDetails: bus[] | undefined;
  previousBusNo: any | undefined;
  userStore: any | undefined;
  userEmail: any | undefined;
  seats: any | undefined;
  amount: number | undefined;
  price: any | undefined;
  seatBookingDetails: any[] = [];
  passengerDetailsArray: PassengerDetails[] = [];

  constructor(
    private adminService: AdminService,
    private booking: BookingsService,
    private route : Router
  ) {}
  ngOnInit(): void {
    this.receivedBookingData = history.state.data;
    console.log('recvd', this.receivedBookingData);

    this.seats = history.state.seats;

    this.seatBookingDetails = history.state.seatDetails;

    console.log('seat booking setails ::: ', this.seatBookingDetails);

    this.receivedBookingData?.forEach((ele) => {
      if (ele.busno === this.previousBusNo) {
        return;
      }
      this.adminService.getBusDetails().subscribe((result) => {
        this.busDetails = result.filter((element) => element.id === ele.busno);
        this.price = this.busDetails[0].price;
        this.amount = this.price * this.seats;

        console.log(this.busDetails);
      });
      this.previousBusNo = ele.busno;
    });

    if (localStorage.getItem('admin') != null) {
      this.userStore = localStorage.getItem('admin');
      const adminData = JSON.parse(this.userStore);
      this.userEmail = adminData[0].email;
    } else {
      this.userStore = localStorage.getItem('user');
      const adminData = JSON.parse(this.userStore);
      this.userEmail = adminData.email;
    }
  }
  getPassengerDetails(passengerData: any): void {
    console.log('passenger data:', passengerData);

    // Initialize a dictionary to store passengers based on seat numbers
    const seatPassengers: { [seat: number]: PassengerDetails } = {};
    console.log(seatPassengers);

    // Iterate over the passengerData to group passengers by seat number
    Object.keys(passengerData).forEach((key) => {
      if (key.startsWith('name')) {
        const index = key.replace(/\D+/g, '');
        const seatNumber = passengerData[`seat${index}`];

        // Check if a passenger with the same seat number exists
        if (seatPassengers[seatNumber]) {
          // If exists, update the existing passenger details
          seatPassengers[seatNumber].name = passengerData[`name${index}`];
          seatPassengers[seatNumber].age = passengerData[`age${index}`];
          seatPassengers[seatNumber].contact = passengerData[`contact${index}`];
        } else {
          // If not, create a new passenger object and add it to the dictionary
          seatPassengers[seatNumber] = {
            name: passengerData[`name${index}`],
            age: passengerData[`age${index}`],
            contact: passengerData[`contact${index}`],
          };
        }
      }
      this.route.navigate(['/admin-home']);
    });

    // Convert the dictionary into an array of PassengerDetails
    const passengerDetailsArray: PassengerDetails[] =
      Object.values(seatPassengers);

    console.log(passengerDetailsArray);

    // Add the passengerDetailsArray to seatBookingDetails
    // this.seatBookingDetails.push(...passengerDetailsArray);

    console.log('seatBookingdetails:', JSON.stringify(this.seatBookingDetails));

    this.seatBookingDetails.forEach((element) => {
      this.booking.addBookings(element).subscribe((result) => {
        console.log(result);
      });
    });
  }
}
