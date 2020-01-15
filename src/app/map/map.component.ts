import { Component, OnInit, Input } from "@angular/core";
import { MapService } from "./map.service";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;

  @Input() location: string;

  constructor(private mapService: MapService) {
    this.location = "graz, kastellfeldgasse 11";
  }

  ngOnInit() {}

  mapReadyHandler() {
    this.mapService.geocodeLocation(this.location).subscribe(coordinates => {
      this.lat = coordinates.lat;
      this.lng = coordinates.lng;
    });
  }
}
