import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent }  from "../components/app.component";
import { SelectedUser }  from "../components/userDashboard/selectedUser.component";
import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";
import { UserService } from "../services/user.service";
import { routing } from "../router/app.routing";
import { userDashboard } from "../components/userDashboard/userDashboard.component";
import { ChatComponent } from "../components/chat/chat.component";
import { UserChats } from "../components/userChats/userChats.component";

@NgModule({
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent, SelectedUser, userDashboard, ChatComponent, UserChats ],
  providers: [ UserService ],
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule, routing ],
})
export class AppModule { }
