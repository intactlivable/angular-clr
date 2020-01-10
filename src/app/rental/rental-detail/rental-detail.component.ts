import { Component, OnInit } from "@angular/core";
import { Rental } from "../shared/rental.model";
import { Observable } from "rxjs";
import { RentalService } from "./../shared/rental.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-rental-detail",
  templateUrl: "./rental-detail.component.html",
  styleUrls: ["./rental-detail.component.less"]
})
export class RentalDetailComponent implements OnInit {
  rental: Rental;
  currentId: string;

  constructor(
    private route: ActivatedRoute,
    private rentalService: RentalService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentId = params["rentalId"];
    });
    const rentalObservable: Observable<Rental> = this.rentalService.getRental(
      this.currentId
    );
    rentalObservable.subscribe(
      (rental: Rental) => {
        this.rental = rental;
      },
      error => {},
      () => {}
    );
  }
}
