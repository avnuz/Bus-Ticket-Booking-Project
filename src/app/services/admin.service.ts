import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, min } from 'rxjs';
import {  bus, bustype, login, place, signUp } from 'src/dataType';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


   isSignedIn =  new BehaviorSubject<boolean>(false);
  isLoginError=new EventEmitter<boolean>(false);
  Admin_url ="http://localhost:3000/admin";
  place ="http://localhost:3000/origin";
  bustype="http://localhost:3000/bustype ";
  busUrl = "http://localhost:3000/bus";
  travelHours: string | undefined;

  constructor(private http: HttpClient, private route: Router) { }
  signUp(data: signUp){
    this.http.post(this.Admin_url, {data}, {observe: 'response'}).subscribe((result)=>{
      this.isSignedIn.next(true);
      localStorage.setItem('admin', JSON.stringify(result.body));
      this.route.navigate(['/admin-home']);
      console.warn("result:::", result);
    });
    // this.http.post(this.Admin_url, {data}, {observe: 'response'}).subscribe({next: data => {
    //   // data handling
    //     // this.isSignedIn.next(true);
    // //   localStorage.setItem('admin', JSON.stringify(result.body));
    // //   this.route.navigate(['/admin-home']);
    // //   console.warn("result:::", result);
    // }, error: error => {
    //   // error handling code
    // }})

  }
  login(data: login){
    this.http.get(this.Admin_url+`?email=${data.email}&password=${data.password}`, {observe: 'response'}).subscribe((result: any)=>{
        console.log(result);
        if(result && result.body && result.body.length){

          localStorage.setItem('admin', JSON.stringify(result.body));
          this.route.navigate(['admin-home']);
        }else{

          this.isLoginError.emit(true);
        }
    });
  }

  getPlace(){
    return this.http.get<place[]>(this.place);
  }
  getBusType(){
    return  this.http.get<bustype[]>(this.bustype);
  }
  addBusDetails(data: bus){
      this.calculateTravelhours(data.fromtime, data.totime);
      data.travelhours=this.travelHours;

      return this.http.post(this.busUrl, data);
  }
  getBusDetails(){

      return this.http.get<bus[]>(this.busUrl);
  }

  calculateTravelhours(starttime: any, endtime: any){


          const start_Time = starttime;
          const end_Time = endtime;


          const timeDifference = end_Time - start_Time;


          const hours = Math.floor(timeDifference / (1000 * 60 * 60)); // Convert milliseconds to hours
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // Convert remaining milliseconds to minutes
          this.travelHours= `${hours}+h ${minutes}+m`
          console.log(this.travelHours);

  }
}
