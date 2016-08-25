import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent }  from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";
import { UserService } from "./user.service";

@NgModule({
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent ],
  providers: [ UserService ],
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule ],
})
export class AppModule { }
