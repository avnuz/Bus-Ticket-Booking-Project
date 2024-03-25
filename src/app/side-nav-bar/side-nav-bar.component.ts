import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform: 'translate3d(0, 0, 0)',
        })
      ),
      state(
        'out',
        style({
          transform: 'translate3d(-100%, 0, 0)',
        })
      ),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ],
})
export class SideNavBarComponent implements OnInit {
  menuType: string = 'default';
  adminName: string = '';
  userName: string = '';
  public sidebarState: string = 'in';
  constructor(private route: Router) {}
  ngOnInit(): void {
    this.route.events.subscribe((result: any) => {
      if (result.url) {
        if (localStorage.getItem('admin') && result.url.includes('admin')) {
          let adminStore = localStorage.getItem('admin');
          let adminData = adminStore && JSON.parse(adminStore)[0];
          this.adminName = adminData.email;
          this.menuType = 'admin';
        } else if (localStorage.getItem('user')) {
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.email;
          this.menuType = 'user';
        } else {
          this.menuType = 'default';
        }
      }
    });
  }

  adminlogout() {
    localStorage.removeItem('admin');
    this.route.navigate(['/']);
  }
  userlogout() {
    localStorage.removeItem('user');
    this.route.navigate(['/']);
  }
  toggleOnClick() {
    console.log("toggle entered");
      this.sidebarState = this.sidebarState === 'in' ? 'out' : 'in';
      console.log(this.sidebarState)
  }
}
