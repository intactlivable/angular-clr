import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Rental } from "./rental.model";

@Injectable()
export class RentalService {
  private rentals: Rental[] = [
    {
      id: "1",
      title: "First Appartment",
      city: "Graz",
      street: "Kastellfeldgasse",
      category: "appartment",
      image: "http://via.placehoder.com/350x250",
      bedrooms: 3,
      description: "Very nice appartment",
      daylyRate: 34,
      shared: false,
      createdAt: new Date("24/12/2017")
    },
    {
      id: "2",
      title: "Second Appartment",
      city: "Wien",
      street: "Mariahilferstrasse",
      category: "appartment",
      image: "http://via.placehoder.com/350x250",
      bedrooms: 2,
      description: "Very, very nice appartment",
      daylyRate: 54,
      shared: false,
      createdAt: new Date("24/12/2015")
    },
    {
      id: "3",
      title: "Third Appartment",
      city: "Linz",
      street: "Voeststrasse",
      category: "house",
      image: "http://via.placehoder.com/350x250",
      bedrooms: 5,
      description: "Very nice house",
      daylyRate: 74,
      shared: false,
      createdAt: new Date("24/12/2014")
    }
  ];

  public getRentals(): Observable<Rental[]> {
    const rentalObservable: Observable<Rental[]> = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);
      setTimeout(() => {
        observer.error("Error");
      }, 5000);
      setTimeout(() => {
        observer.error("Complete");
      }, 5000);
    });
    return rentalObservable;
  }

  public getRental(id: string): Observable<Rental> {
    const rentalObservable: Observable<Rental> = new Observable(observer => {
      setTimeout(() => {
        // this.rentals.forEach(element => {
        //   let e = element as Rental;
        //   if (e.id == id) {
        //     observer.next(e);
        //   }
        // });
        const rental = this.rentals.find((rental: Rental) => {
          return rental.id == id;
        });
        observer.next(rental);
      }, 3000);
      setTimeout(() => {
        observer.error("Error");
      }, 5000);
      setTimeout(() => {
        observer.error("Complete");
      }, 5000);
    });
    return rentalObservable;
  }
}
