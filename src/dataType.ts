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
  id: any;
seat: any;
totime: any;
fromtime: any;
  name: string;
  pickup: string;
  dropping: string;
  fromdate: Date;
  todate: Date;
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
export interface booking{
  id: string;
  seatno: number;
  userid: number;
  busid: number;
}
