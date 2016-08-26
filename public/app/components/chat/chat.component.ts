import { Component, OnInit } from "@angular/core";
import { User } from "../../objects/user";
import { Observable } from "rxjs/Rx";
import { UserService } from "../../services/user.service";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: "user-chat",
    templateUrl: "templates/user-chat.html",
})
export class ChatComponent implements OnInit {

    user: User;
    otherUser: User;

    constructor(private service: UserService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.getUser();
        this.route.params.forEach((params: Params) => {
            let id = params["id"];
            this.getOtherUser(id);
        });
    }

    getUser(): void {
        this.service.getUser().then(
            result => this.user = result
        );
    }

    getOtherUser(id: string): void {
        this.service.getOtherUser(id).then(
            result => {
                this.otherUser = result;
                console.log("OTHER USER:\t" + this.otherUser._id);
            }
        );
    }
}
