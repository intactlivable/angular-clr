import { Observable } from "rxjs";
import { RentalService } from "./../shared/rental.service";
import { Component, OnInit } from "@angular/core";
import { Rental } from "../shared/rental.model";

@Component({
  selector: "app-rental-list",
  templateUrl: "./rental-list.component.html",
  styleUrls: ["./rental-list.component.less"]
})
export class RentalListComponent implements OnInit {
  rentals: Rental[] = [];

  constructor(private rentalService: RentalService) {}

  ngOnInit() {
    const rentalObservable: Observable<Rental[]> = this.rentalService.getRentals();
    rentalObservable.subscribe(
      (rentals: Rental[]) => {
        this.rentals = rentals;
      },
      error => {},
      () => {}
    );
  }
}
