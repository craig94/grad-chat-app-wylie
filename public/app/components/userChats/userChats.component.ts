import { Component, OnInit, Input } from "@angular/core";
import { User } from "../../objects/user";
import { Chat } from "../../objects/chat";
import { Observable } from "rxjs/Rx";
import { UserService } from "../../services/user.service";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: "user-chats",
    templateUrl: "templates/user-chats.html",
})
export class UserChats implements OnInit {

    selectedChat: Chat;
    chats: Chat[];
    chatsLoaded: boolean;
    @Input()
    user: User;

    constructor(private service: UserService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.getChats();
        this.chatsLoaded = true;
    }

    getChats(): void {
        this.service.getChats(this.user._id).then(
            result => {
                this.chats = result;
            }
        ).catch(
            error => error
        );
    }

    selectChat(chat: Chat): void {
        this.selectedChat = chat;
    }
}
