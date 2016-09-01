import { Component, OnInit } from "@angular/core";
import { User } from "../../objects/user";
import { Observable } from "rxjs/Rx";
import { UserService } from "../../services/user.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Conversation } from "../../objects/conversation";
import { MessagingService } from "../../services/messaging.service";

@Component({
    selector: "user-chat",
    templateUrl: "templates/user-chat.html",
})
export class ChatComponent implements OnInit {

    user: User;
    chatID: string;
    convo: Conversation;
    private connection;
    message;
    messages = [];

    constructor(private service: UserService, private route: ActivatedRoute, private messaging: MessagingService) {}

    ngOnInit(): void {
        this.getUser();
        this.route.params.forEach((params: Params) => {
            this.chatID = params["chatID"];
        });
        this.getChatDetails(this.chatID);

        this.messaging.getMsgs().subscribe(msg => {
            this.messages.push(msg)
        });
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

    sendMessage(msg: string): void {
        this.messaging.sendMsg(msg);
    }
}
