import { Routes, RouterModule } from "@angular/router";
import { RentalService } from "./shared/rental.service";
import { RentalComponent } from "./rental.component";
import { NgModule } from "@angular/core";
import { RentalListComponent } from "./rental-list/rental-list.component";
import { RentalListItemComponent } from "./rental-list-item/rental-list-item.component";
import { RentalDetailComponent } from "./rental-detail/rental-detail.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: "rentals",
    component: RentalComponent,
    children: [
      { path: "", component: RentalListComponent },
      { path: ":rentalId", component: RentalDetailComponent }
    ]
  }
];

@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RentalComponent],
  providers: [RentalService]
})
export class RentalModule {}
