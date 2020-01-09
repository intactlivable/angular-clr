import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StartComponentComponent } from "./start-component/start-component.component";
import { HeaderComponent } from "./header-component/header-component.component";

@NgModule({
  declarations: [AppComponent, StartComponentComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
