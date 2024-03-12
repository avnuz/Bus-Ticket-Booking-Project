import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddBusdetailsComponent } from './admin-add-busdetails/admin-add-busdetails.component';
import { AdminUpdateBusdetailsComponent } from './admin-update-busdetails/admin-update-busdetails.component';
import { AdminBuslistComponent } from './admin-buslist/admin-buslist.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { BookingsComponent } from './bookings/bookings.component';
import { canActivateAuthGuard } from './guards/canactivate.guard';
import { LogincanActivateAuthGuard } from './guards/login-canactivate.guard';
import { BusTicketPaymentComponent } from './bus-ticket-payment/bus-ticket-payment.component';
import { MyAccountComponent } from './components/my-account/my-account.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
  },

  {
    path: 'user-Login',
    component: UserAuthComponent
  },
  {
    path: 'Bookings',
    component: BookingsComponent,
    canActivate: [canActivateAuthGuard]
  },
  {
    path: 'admin-home',
    component: AdminHomeComponent,
  },
  {
    path: 'admin-add-busdetails',
    component: AdminAddBusdetailsComponent,
    canActivate: [canActivateAuthGuard]
  },

  {
    path: 'admin-buslist',
    component: AdminBuslistComponent,
    canActivate: [canActivateAuthGuard]
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent,
    canActivate: [LogincanActivateAuthGuard],
  },
  {
    path: 'payment',
    component: BusTicketPaymentComponent,
    canActivate: [canActivateAuthGuard]
  },
  {
    path: 'my-account',
    component: MyAccountComponent,
    canActivate: [canActivateAuthGuard]
  },
  {
    path: 'admin-update-busDetail/:id',
    component: AdminUpdateBusdetailsComponent,
    canActivate: [canActivateAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
