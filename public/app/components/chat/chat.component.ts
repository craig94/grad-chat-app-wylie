import { Component, OnInit } from "@angular/core";
import { User } from "../../objects/user";
import { Observable } from "rxjs/Rx";
import { UserService } from "../../services/user.service";
import { ActivatedRoute, Params } from '@angular/router';
import { Conversation } from "../../objects/conversation";

@Component({
    selector: "user-chat",
    templateUrl: "templates/user-chat.html",
})
export class ChatComponent implements OnInit {

    user: User;
    chatID: string;
    convo: Conversation;

    constructor(private service: UserService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.getUser();
        this.route.params.forEach((params: Params) => {
            this.chatID = params["chatID"];
        });
        this.getChatDetails(this.chatID);
    }

    getUser(): void {
        this.service.getUser().then(
            result => this.user = result
        );
    }

    getChatDetails(id: string): void {
        this.service.getChatDetails(id).then(
            result => this.convo = result
        );
    }
}
