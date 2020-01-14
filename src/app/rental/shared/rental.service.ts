import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Rental } from "./rental.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RentalService {
  constructor(private http: HttpClient) {}

  public getRentals(): Observable<any> {
    return this.http.get("/api/v1/rentals");
    // const rentalObservable: Observable<Rental[]> = new Observable(observer => {
    //   setTimeout(() => {
    //     observer.next(this.rentals);
    //   }, 1000);
    //   setTimeout(() => {
    //     observer.error("Error");
    //   }, 5000);
    //   setTimeout(() => {
    //     observer.error("Complete");
    //   }, 5000);
    // });
    // return rentalObservable;
  }

  public getRental(id: string): Observable<any> {
    return this.http.get("/api/v1/rentals/" + id);
    // const rentalObservable: Observable<Rental> = new Observable(observer => {
    //   setTimeout(() => {
    //     const rental = this.rentals.find((rental: Rental) => {
    //       return rental.id == id;
    //     });
    //     observer.next(rental);
    //   }, 3000);
    //   setTimeout(() => {
    //     observer.error("Error");
    //   }, 5000);
    //   setTimeout(() => {
    //     observer.error("Complete");
    //   }, 5000);
    // });
    // return rentalObservable;
  }
}
