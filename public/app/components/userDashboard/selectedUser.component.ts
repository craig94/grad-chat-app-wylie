import { Component, Input } from "@angular/core";
import { User } from "../../objects/user";
import { Router } from "@angular/router";

@Component({
    selector: "user-detail",
    templateUrl: "templates/user-detail.html",
})
export class SelectedUser {
    @Input()
    user: User;

    constructor(private router: Router) {}

    chat(): void {
        let link = ["/users", this.user._id];
        this.router.navigate(link);
    }
}
