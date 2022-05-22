import { ɵExtraLocaleDataIndex } from "@angular/core";

export class Camping {

  Id: number;
  name: string;
  location: string;
  date: string;
  distance: number;
  price: number;

  constructor(
    Id: number = 0,
    name: string = '',
    location: string = '',
    date: string = "" ,
    distance: number = 0,
    price: number = 0,
  ){
    this.Id = Id;
    this.name = name;
    this.location = location;
    this.date = date;
    this.distance = distance;
    this.price = price;
  }
}
