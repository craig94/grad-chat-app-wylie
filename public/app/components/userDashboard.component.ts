import { Component, OnInit } from "@angular/core";
import { User } from "../objects/user";
import { UserService } from "../services/user.service";
import { Observable } from "rxjs/Rx";

@Component({
    selector: "user-dashboard",
    templateUrl: "templates/my-app.html",
})
export class userDashboard implements OnInit {
    user: User;
    users: User[];
    loginUri: string;
    loggedIn: boolean;
    selectedUser: User;

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

    selectUser(user: User): void {
        this.selectedUser = user;
    }
}