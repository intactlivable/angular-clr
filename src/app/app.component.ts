import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  title = "bmw-clr test";
  name = "mathias";
  startlink = "start component";

  clickHandler() {
    alert("I am clicked");
  }
}
