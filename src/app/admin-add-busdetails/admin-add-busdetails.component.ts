import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { bus, bustype, place } from '../../dataType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-busdetails',
  templateUrl: './admin-add-busdetails.component.html',
  styleUrls: ['./admin-add-busdetails.component.scss']
})
export class AdminAddBusdetailsComponent implements OnInit {
  places: place[] | undefined;
  busType: bustype[] | undefined;
  constructor(private admin: AdminService, private route: Router){

  }
  ngOnInit(): void {

    this.admin.getPlace().subscribe((result)=>{
      console.log(result);
      this.places=result;
    });

    this.admin.getBusType().subscribe((bustypes)=>{
      this.busType=bustypes;
    })
  }

  addBus(data: any){
      console.log("data::",data);
      this.admin.addBusDetails(data).subscribe((result)=>{
          if(result){
            this.route.navigate(['/admin-buslist']);
          }
      });
  }
}
