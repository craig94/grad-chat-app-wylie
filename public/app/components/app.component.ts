import { Component, OnInit } from "@angular/core";
import { User } from "../objects/user";
import { UserService } from "../services/user.service";
import { Observable } from "rxjs/Rx";

@Component({
    selector: "my-app",
    templateUrl: "templates/my-app.html",
})
export class AppComponent implements OnInit {
    user: User;
    users: User[];
    loginUri: string;
    loggedIn: boolean;

    constructor (private service: UserService) {}

    ngOnInit(): void {
        this.loggedIn = false;
        this.getUser();
    }

    getUri(): void {
        this.service.getUri().then(
            result => {
                this.loginUri = result.uri;
            }
        );
    }

    getUser(): void {
        this.service.getUser().then(
            result => {
                this.loggedIn = true;
                this.user = result;
                this.getUsers();
            }
        ).catch(
            () => this.getUri()
        );
    }

    getUsers(): void {
        this.service.getUsers().then(
            result => this.users = result
        );
    }
}
