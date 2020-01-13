import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StartComponentComponent } from "./start-component/start-component.component";
import { HeaderComponent } from "./header-component/header-component.component";
import { RentalComponent } from "./rental/rental.component";
import { routerNgProbeToken } from "@angular/router/src/router_module";
import { RentalModule } from "./rental/rental.module";

const routes: Routes = [
  { path: "", redirectTo: "/rentals", pathMatch: "full" }
];

@NgModule({
  declarations: [AppComponent, StartComponentComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    RentalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HeaderComponent, RentalComponent]
})
export class AppModule {}
