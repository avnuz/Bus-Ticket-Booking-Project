import { Component, OnInit } from '@angular/core';
import { login, signUp } from 'src/dataType';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit{
  constructor(private user: UserService){

  }
  ngOnInit(): void {

  }

loginError: string ='';
  isSignUp : boolean = false;
  signUp(data: signUp){
      this.user.signUp(data);
  }
  login(data: login){
    this.user.login(data);
    this.user.isLoginError.subscribe((isError: any)=>{
      if(isError=true){
        this.loginError="Incorrect email or password";
      }else{
        this.loginError='';
      }
    })

  }
  signedin(){
    this.isSignUp=true;
  }
  loggedin(){
    this.isSignUp=false;
}
}
