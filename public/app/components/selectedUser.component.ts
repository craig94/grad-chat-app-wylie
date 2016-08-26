import { Component, Input } from "@angular/core";
import { User } from "../objects/user";

@Component({
    selector: "user-detail",
    templateUrl: "templates/user-detail.html",
})
export class SelectedUser {
    @Input()
    user: User;
}
