import { Time } from "@angular/common";

export interface signUp {
  name: string;
  email: string;
  password: string;
}
export interface login {
  email: String;
  password: String;
}
export interface bus {
  name: any;
  id: any;
  seat: any;
  totime: any;
  fromtime: any;

  pickup: string;
  dropping: string;
  fromdate: string;
  Todate: string;
  from: Time;
  to: Time;
  bustype: string;
  contact: string;
  price: string;
  travelhours: string | undefined;
}
export interface place{
  id: string;
  name: string;
}
export interface bustype{
  id: string;
  name: string;
}
export interface booking {
  id: string;
  seat: number;
  userid: string;
  busno: number;
  name: string;
  contact: string;
  age: number;
  busname: string;
  fromdate: string;
  todate: string;
  from: Time;
  to: Time;
  bustype: string;

  price: string;
  travelhours: string | undefined;
}
export interface PassengerDetails {
  name: string;
  contact: string; // Assuming contact is a string
  age: number;
}
