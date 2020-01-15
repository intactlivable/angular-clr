import { MapComponent } from "./map.component";
import { NgModule } from "@angular/core";
import { AgmCoreModule } from "@agm/core";
import { MapService } from "./map.service";

@NgModule({
  declarations: [MapComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAcfCUW3VpkKyDV6kde0qouY_sfnYUo984"
    })
  ],
  exports: [MapComponent],
  providers: [MapService]
})
export class MapModule {}

//ApiKey: AIzaSyAcfCUW3VpkKyDV6kde0qouY_sfnYUo984;

//AIzaSyAcfCUW3VpkKyDV6kde0qouY_sfnYUo984
