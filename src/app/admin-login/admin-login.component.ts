import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import {  login, signUp } from 'src/dataType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  isSignUp: boolean= true;
  loginError: string='';

  constructor(private admin: AdminService, private route : Router){

  }
  ngOnInit(): void {

  }
  signUp(data: signUp){
    console.log(data);

    this.admin.signUp(data);
  }
  Login(data: login){
    console.log(data);
      this.loginError=''
      this.admin.login(data);
      this.admin.isLoginError.subscribe((isLogin)=>{
        if(isLogin=true){
          console.log("incorrect");
          this.loginError="Incorrect email or password!"
        }else{
          this.loginError='';
        }
      });

  }
  signedin(){
    this.isSignUp=true;
  }
  loggedin(){
    this.isSignUp=false;
}
}
