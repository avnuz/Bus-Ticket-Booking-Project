import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { bus } from 'src/dataType';

@Component({
  selector: 'app-admin-update-busdetails',
  templateUrl: './admin-update-busdetails.component.html',
  styleUrls: ['./admin-update-busdetails.component.scss'],
})
export class AdminUpdateBusdetailsComponent implements OnInit {
  busdetails: any | undefined;
places: any;
  constructor(
    private adminservices: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    let busid = this.route.snapshot.paramMap.get('id');
    busid && this.adminservices.getBusDetailsbyId(busid).subscribe((result) => {
      this.busdetails = result;
      console.log(this.busdetails);
    });

    this.adminservices.getPlace().subscribe((result)=>{
      this.places = result;
    })
  }

  editBus(data:any){
    data.id= this.busdetails[0].id;
    console.log(data.id)
    this.adminservices
      .updateBusDetail(data, this.busdetails)
      .subscribe((result) => {
        console.log(result);
      });
      this.router.navigate(['/admin-buslist']);

  }
}
