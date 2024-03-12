import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { bus } from 'src/dataType';

@Component({
  selector: 'app-admin-buslist',
  templateUrl: './admin-buslist.component.html',
  styleUrls: ['./admin-buslist.component.scss'],
})
export class AdminBuslistComponent implements OnInit {
  busDetails: bus[] | undefined;
  buslist: bus[] | undefined;
  page = 1;
  pageSize = 4;
  collectionSize: number | null | undefined;

  constructor(private admin: AdminService) {
    this.refreshCountries();
  }

  ngOnInit(): void {
    this.getBusDetails();
  }

  getBusDetails() {
    this.admin.getBusDetails().subscribe((result) => {
      this.busDetails = result;
      this.buslist = result;
      this.collectionSize = this.busDetails.length;
      console.log('bus::', this.busDetails);
      this.refreshCountries();
    });
  }

  refreshCountries(): void {
    if (this.busDetails) {
      this.buslist = this.busDetails
        .map((bus: any, i: number) => ({ id: i + 1, ...bus }))
        .slice(
          (this.page - 1) * this.pageSize,
          (this.page - 1) * this.pageSize + this.pageSize
        );
    }
  }

  deleteBus(id: any) {
    this.admin.deleteBusDetail(id).subscribe((result)=>{

      console.log(result);
      this.getBusDetails();
    });
  }


}
