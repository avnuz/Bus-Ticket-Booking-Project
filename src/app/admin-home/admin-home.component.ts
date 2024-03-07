import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { bus } from 'src/dataType';
import { SeatComponent } from '../seat/seat.component';
import { BookingsService } from '../services/bookings.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  isCollapsed = false;
  busDetails: bus[] | undefined;
  userid: any | undefined;
  isSelected: boolean=true;
  booking: any[] = [];

  seats:any[] | undefined;
item: any;
  constructor(private admin: AdminService, private bookingService : BookingsService){

  }
  ngOnInit(): void {




    this.admin.getBusDetails().subscribe((result)=>{
    this.busDetails = result;
    console.log(this.busDetails);
   });
   if(!localStorage.getItem('user')){
      this.userid=localStorage.getItem('admin');
   }else{
      this.userid=localStorage.getItem('user');
   }

  }

  trackByFn(index: number, item: any): number {
    return item.id; // Use a unique identifier of each item as the track by value
  }
 generateSeatArray(seatcount: any, bus: any) {
  console.log(seatcount);



    this.seats = new Array(seatcount).fill(0).map((_, index) => index + 1);

  }
}
