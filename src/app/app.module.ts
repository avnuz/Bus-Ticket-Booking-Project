import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatStepperModule } from '@angular/material/stepper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AdminAddBusdetailsComponent } from './admin-add-busdetails/admin-add-busdetails.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUpdateBusdetailsComponent } from './admin-update-busdetails/admin-update-busdetails.component';
import { AdminBuslistComponent } from './admin-buslist/admin-buslist.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { BookingsComponent } from './bookings/bookings.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { SeatComponent } from './seat/seat.component';
import { BusTicketPaymentComponent } from './bus-ticket-payment/bus-ticket-payment.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperComponent } from './stepper/stepper.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AdminAddBusdetailsComponent,
    AdminHomeComponent,
    AdminUpdateBusdetailsComponent,
    AdminBuslistComponent,
    AdminLoginComponent,
    UserAuthComponent,
    BookingsComponent,
    MyAccountComponent,
    SeatComponent,
    BusTicketPaymentComponent,
    SideNavBarComponent,
    StepperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbAccordionModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
