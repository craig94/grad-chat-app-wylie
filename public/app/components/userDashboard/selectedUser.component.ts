import { Component, Input } from "@angular/core";
import { User } from "../../objects/user";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";

@Component({
    selector: "user-detail",
    templateUrl: "templates/user-detail.html",
})
export class SelectedUser {
    @Input()
    user: User;
    @Input()
    selectedUser: User;

    constructor(private router: Router, private service: UserService) {}

    chat(): void {
        let link = ["/users", this.user._id];
        this.router.navigate(link);
    }

    createChat(): void {
        this.service.createChat(this.user, this.selectedUser).then(
            result => result
        ).catch(
            error => error
        );
    }
}
