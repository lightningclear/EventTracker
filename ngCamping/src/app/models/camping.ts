import { ɵExtraLocaleDataIndex } from "@angular/core";

export class Camping {

  id: number;
  name: string;
  location: string;
  date: string;
  distance: number;
  price: number;

  constructor(
    id: number = 0,
    name: string = '',
    location: string = '',
    date: string = "" ,
    distance: number = 0,
    price: number = 0,
  ){
    this.id = id;
    this.name = name;
    this.location = location;
    this.date = date;
    this.distance = distance;
    this.price = price;
  }
}
