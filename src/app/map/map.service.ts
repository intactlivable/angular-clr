import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class MapService {
  private geoCoder;

  public geocodeLocation(location: string): Observable<any> {
    this.geoCoder = new (<any>window).google.maps.Geocoder();
    console.log(this.geoCoder);
    return new Observable(observer => {
      this.geoCoder.geocode({ address: location }, (result, status) => {
        if (status == "OK") {
          const geometry = result[0].geometry.location;

          observer.next({ lat: geometry.lat(), lng: geometry.lng() });
        } else {
          observer.error("Location could not be geocoded");
        }
      });
    });
  }
}
