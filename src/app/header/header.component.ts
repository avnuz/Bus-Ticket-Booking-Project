import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 menuType: string = 'default';
  adminName: string='';
  userName: string='';
constructor(private route: Router){

  }
  ngOnInit(): void {

    this.route.events.subscribe((result: any)=>{
      if(result.url){
        if(localStorage.getItem('admin') && result.url.includes('admin')){


            let adminStore = localStorage.getItem('admin');
            let adminData =adminStore && JSON.parse(adminStore)[0];
            this.adminName = adminData.email;
            this.menuType='admin';


        }else if(localStorage.getItem('user') ){
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.email;
          this.menuType='user';

        }else{
          this.menuType='default';
        }
      }

    });


  }

  adminlogout(){
    localStorage.removeItem('admin');
    this.route.navigate(['/']);

  }
  userlogout(){
    localStorage.removeItem('user');
    this.route.navigate(['/']);
  }



}
