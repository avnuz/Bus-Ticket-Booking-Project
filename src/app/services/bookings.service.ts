import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { booking } from 'src/dataType';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  bookingUrl="http://localhost:3000/bookings";

  constructor(private http: HttpClient) { }

  addBookings(data: booking){
   return this.http.post(this.bookingUrl, data);
  }

  getBookings(){
    return this.http.get(this.bookingUrl);
  }
}
