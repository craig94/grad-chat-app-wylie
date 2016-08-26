import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent }  from "../components/app.component";
import { SelectedUser }  from "../components/selectedUser.component";
import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";
import { UserService } from "../services/user.service";

@NgModule({
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent, SelectedUser ],
  providers: [ UserService ],
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule ],
})
export class AppModule { }
